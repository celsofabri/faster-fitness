import styled from 'styled-components';

export const StyledContainer = styled.main`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const StyledSidebar = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100vh;
  padding: 32px;
  background-color: #0273cc;

  img {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;

    img {
      width: 50%;
      height: auto;
    }
  }
`;

export const StyledLogo = styled.div`
  font-size: 18px;
  font-weight: 700;
  font-style: italic;
  color: #382b74;
  text-align: center;
  text-transform: uppercase;
`;

export const StyledRanking = styled.section`
  width: 70%;
  height: 100vh;
  padding: 100px 32px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const StyledEmptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 100vh;
  padding: 100px 32px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const StyledTitle = styled.h3`
  font-size: 32px;
`;

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  border: 1px solid #e8e8e8;
`;

export const StyledItem = styled.li`
  display: flex;
  flex-start: flex-start;
  flex-wrap: wrap;
  padding: 16px;

  &:nth-child(2n + 1) {
    background-color: #e8e8e8;
  }
`;

export const StyledPerson = styled.div`
  width: 70%;
`;

export const StyledPoints = styled.div`
  width: 30%;
`;
