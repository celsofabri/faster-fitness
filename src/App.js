import React, { useEffect, useState } from 'react';
import {
  StyledContainer,
  StyledSidebar,
  StyledLogo,
  StyledRanking,
  StyledTitle,
  StyledList,
  StyledItem,
  StyledRow,
  StyledPosition,
  StyledPerson,
  StyledPoints,
  StyledAction,
  StyledEmptyState,
  StyledDetails,
  StyledClose,
  StyledLabel
} from './styled.js';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import fasterLogo from './assets/images/faster-logo.svg';

const App = () => {
  const [people, setPeople] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const query = `
    {
      rankingCollection{
        items {
          name
          points
          details
          disqualified
        }
      }
    }
  `;

  const ranking = people;

  console.log(ranking);

  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/mgq7l530tefn/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer cb4TdCZR4oyeLi4qQvyP3F3H_WnSd1rKsQkCNUBsyQE'
          },
          body: JSON.stringify({ query })
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setPeople(data.rankingCollection.items);
      });
  }, [query]);

  ranking.sort((a, b) => {
    return b.points - a.points;
  });

  console.log('modalData', modalData);

  return (
    <React.Fragment>
      <StyledContainer>
        <StyledSidebar>
          <StyledLogo>
            <img src={fasterLogo} alt="Faster" />
            <p>Desafio Fitness</p>
          </StyledLogo>
        </StyledSidebar>
        {ranking.length ? (
          <StyledRanking>
            <StyledTitle>Ranking</StyledTitle>
            <StyledList>
              {ranking.map((person, index) => {
                console.log('person', person.details);

                return (
                  <StyledItem
                    key={index}
                    disqualified={person?.disqualified}
                  >
                    <StyledRow>
                      <StyledPosition>{index + 1}</StyledPosition>
                      <StyledPerson>
                        <StyledLabel>Nome:</StyledLabel> {person.name}
                      </StyledPerson>
                      <StyledPoints>
                        <StyledLabel>Pontos:</StyledLabel>{' '}
                        {person.points}
                      </StyledPoints>
                      {person?.details && (
                        <StyledAction
                          onClick={() => {
                            setModalData(person);
                            setModalOpen((modalOpen) => !modalOpen);
                          }}
                          disqualified={person?.disqualified}
                        >
                          <button>Ver detalhes</button>
                        </StyledAction>
                      )}
                    </StyledRow>
                  </StyledItem>
                );
              })}
            </StyledList>
            <StyledDetails isVisible={modalOpen}>
              <StyledClose
                type="button"
                onClick={() => {
                  setModalOpen(false);
                }}
              >
                Fechar
              </StyledClose>
              <StyledTitle>{modalData?.name}</StyledTitle>
              <Markdown remarkPlugins={[remarkGfm]}>
                {modalData?.details}
              </Markdown>
            </StyledDetails>
          </StyledRanking>
        ) : (
          <StyledEmptyState>
            <p>No people yet.</p>
          </StyledEmptyState>
        )}
      </StyledContainer>
    </React.Fragment>
  );
};

export default App;
