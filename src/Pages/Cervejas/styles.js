import styled from "styled-components";




export const CardOverflow = styled.div`
  overflow: auto;
  height: 70vh;
  width: 90%;
  padding-left: 1rem;
  padding-right: 1rem;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #b59300;
  }
  border: 2px solid #0e0c08;
  border-radius: 10px;

  @media (min-width: 426px){
    overflow: auto;
  height: 90%;
  width: 65%;
  padding-left: 2rem;
  padding-right: 1rem;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #b59300;
  }
  border: 0;

  }
`;


