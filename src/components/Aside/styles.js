import styled from "styled-components";

export const Aside = styled.div`
  height: 100vh;
  width: 20vw;
  background-color: #b57500;
  box-shadow: 10px 0px 32px -11px rgba(0, 0, 0, 0.75);

  display: flex;
  flex-flow: column wrap;

  padding-top:20vh;
  
  >a{
      padding: 1rem;

      text-align: left;
      text-decoration: none;
      color: black;
      font-family: Oswald, sans-serif;

      &:hover{
          background-color: #0E0C08;
          color: #B59300;
      }
  }

`;