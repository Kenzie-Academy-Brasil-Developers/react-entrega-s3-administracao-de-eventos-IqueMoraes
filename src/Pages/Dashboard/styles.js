import styled from "styled-components";






export const Main = styled.main`
  width: 70%;
  height: 85%;
  padding: 1rem;
  border-radius: 20px;
  background-color: #b59300;
  box-shadow: 18px 19px 32px -11px rgba(0, 0, 0, 0.75);

  
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  > button {
    height: 30px;
    width: 100%;
    margin-right: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem;
    font-family: "Roboto Condensed", sans-serif;

    &:hover {
      background-color:  #0E0D08;
      color: white;
    }

    > span {
      font-weight: bold;
      width: 100%;
    }

    cursor: pointer;

    border: none;
    border-radius: 8px;
    box-shadow: 2px 5px 5px 3px rgba(0, 0, 0, 0.45);
  }

  @media (min-width: 426px){
    width: 70%;
  height: 60%;

  }

`;

export const EventButton = styled.button`
  height: 60px;
  width: 160px;
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  color: #f9cf84;
  background-color: ${(props) => props.backgroundColor};
  &:hover {
    background-color: #372b15;
    color: white;
  }

  font-family: "Roboto Condensed", sans-serif;


  > span {
    font-weight: bold;
    width: 100%;
  }

  cursor: pointer;

  border: none;
  border-radius: 8px;
  box-shadow: 2px 5px 5px 3px rgba(0, 0, 0, 0.45);
`;
