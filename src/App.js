import React, { useEffect, useState } from 'react';
import {
  StyledContainer,
  StyledSidebar,
  StyledLogo,
  StyledRanking,
  StyledTitle,
  StyledList,
  StyledItem,
  StyledPerson,
  StyledPoints,
  StyledEmptyState
} from './styled.js';
// import people from './mock.js';
import fasterLogo from './assets/images/faster-logo.svg';

const App = () => {
  const [people, setPeople] = useState([]);
  const query = `
    {
      rankingCollection{
        items {
          name
          points
        }
      }
    }
  `;

  const ranking = people;

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
                return (
                  <StyledItem key={index}>
                    <StyledPerson>{person.name}</StyledPerson>
                    <StyledPoints>{person.points}</StyledPoints>
                  </StyledItem>
                );
              })}
            </StyledList>
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
