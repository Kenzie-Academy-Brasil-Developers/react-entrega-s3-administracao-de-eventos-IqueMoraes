import styled from "styled-components";

export const Aside = styled.div`
  height: 17vh;
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
  padding-top: 3vh;
  padding-left: 1rem;
  background-color: #b57500;
  box-shadow: 10px 0px 32px -11px rgba(0, 0, 0, 0.75);

  > a {
    padding: 0;
    margin-right: 0.7rem;

    text-align: center;
    text-decoration: none;
    color: black;
    font-family: Oswald, sans-serif;

    &:hover {
      background-color: #0e0c08;
      color: #b59300;
    }
  }

  @media (min-width: 426px) {
    height: 100vh;
    width: 20vw;

    flex-flow: column wrap;

    padding-top: 20vh;
    padding-left: 0;
    > a {
      padding: 1rem;
      margin-right: 0;

      text-align: left;
      text-decoration: none;
      color: black;
      font-family: Oswald, sans-serif;

      &:hover {
        background-color: #0e0c08;
        color: #b59300;
      }
    }
  }
`;
