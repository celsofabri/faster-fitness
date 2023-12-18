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
  padding: 16px 32px;
  overflow: auto;

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

export const StyledList = styled.ol`
  margin: 0;
  padding: 0;
  border: 1px solid #e8e8e8;
  list-style-type: none;
`;

export const StyledItem = styled.li`
  ${(props) =>
    props.disqualified
      ? `
      color: #ffffff;
      background-color: #C70000;
      &:nth-child(2n + 1) {
        background-color: #C70000
      `
      : `
      &:nth-child(2n + 1) {
        background-color: #e8e8e8;
      }`}

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    font-weight: 700;
  }
`;

export const StyledRow = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 16px;
`;

export const StyledPosition = styled.div`
  width: 10%;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 0;
    width: 100%;
    font-size: 48px;
    text-align: right;
  }
`;

export const StyledPerson = styled.div`
  width: 60%;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-weight: 400;
  }
`;

export const StyledPoints = styled.div`
  width: 10%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 8px 0;
    font-weight: 400;
  }
`;

export const StyledAction = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 20%;

  button {
    position: relative;
    display: block;
    padding: 0;
    margin: 0;
    font-size: 10px;
    font-weight: 600;
    color: ${(props) => (props.disqualified ? '#ffffff' : '#0273cc')};
    text-transform: uppercase;
    border: none;
    background: none;
    cursor: pointer;

    &:before {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1px;
      background-color: ${(props) =>
        props.disqualified ? '#ffffff' : '#0273cc'};
      transition: all linear 0.2s;
      content: '';
    }

    &:hover {
      &:before {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    width: 100%;

    button {
      padding: 16px;
      font-size: 12px;
      color: #ffffff;
      text-transform: lowercase;
      background-color: #0273cc;
      border-radius: 4px;
    }
  }
`;

export const StyledDetails = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100vh;
  padding: 16px;
  background-color: #fff;
  transition: all ease-out 0.3s;

  &:before {
    background-color: rgba(0, 0, 0, 0);
    content: '';
  }

  ${(props) =>
    props.isVisible
      ? `
    z-index: 10;
    opacity: 1;
    transform: scaleX(1);
    transform: scaleY(1);
    transform: scale3d(1, 1, 1);
  `
      : `
    z-index: -1;
    opacity: 0;
    transform: scaleX(1.1);
    transform: scaleY(1.1);
    transform: scale3d(1.1, 1.1, 1.1);

    &:before {
      background-color: rgba(0, 0, 0, 0.5);
      content: '';
    }
  `}

  table {
    width: 100%;
    background-color: #ffffff;
    border-collapse: collapse;
    border-width: 2px;
    border-color: #0273cc;
    border-style: solid;

    th {
      color: #fff;
    }

    td {
      color: #000;
    }
  }

  table td,
  table th {
    border-width: 2px;
    border-color: #0273cc;
    border-style: solid;
    padding: 5px;
  }

  table thead {
    background-color: #0273cc;
  }
`;

export const StyledClose = styled.button`
  position: absolute;
  right: 32px;
  top: 32px;
  display: block;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  cursor: pointer;
  text-indent: -9999px;
  border: none;
  background: none;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #333;
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const StyledLabel = styled.label`
  display: none;
  font-size: 14px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
