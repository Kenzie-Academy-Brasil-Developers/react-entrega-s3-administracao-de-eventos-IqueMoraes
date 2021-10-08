import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #b59300;
  align-items: center;
  justify-content: space-between;

  /* height: 15vh; */
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;

  border-radius: 10px;
  cursor: pointer;

  @media (min-width:426px){
    display: flex;
  background-color: #b59300;
  align-items: center;
  justify-content: space-between;

  height: 15vh;
  width: 100%;
  margin-bottom: 2rem;
  padding: 0.8rem;

  border-radius: 10px;
  cursor: pointer;
  }
`;

export const BeerNameBox = styled.div `
display: flex;
align-items: center;
width: 30%;
font-size: 1.2rem;
>h3 + h3{
    margin-left: 0.5rem;
    width: 80%;
}
`

export const ImageBox = styled.div`
  height: 10vh;

  > img {
    height: 100%;
  }
  &:hover {
    position: relative;
    height: 150px;
    width: 80px;
    padding: 1rem;
    background-color: #373115;
    border-radius: 20px;
    box-shadow: 2px 5px 5px 3px rgba(0, 0, 0, 0.45);
  }

  @media (min-width: 426px){
    height: 80%;

  > img {
    height: 100%;
  }
  &:hover {
    position: relative;
    height: 300px;
    width: 200px;
    padding: 1rem;
    background-color: #373115;
    border-radius: 20px;
    box-shadow: 2px 5px 5px 3px rgba(0, 0, 0, 0.45);
  }
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  height: 100%;



`;
 export const AddButton = styled.button ` 
    height: 30px;
    width: 60px;
    margin-right: 1rem;
    margin-bottom: 1rem;
    padding: 0rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    border: 2px solid transparent;
    color: #f9cf84;
    background-color: ${(props) => props.backgroundColor};
    &:hover {
      border: 2px solid white;
      filter: contrast(140%);
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
 @media (min-width: 426px){
  height: 60px;
    width: 60px;
    margin-right: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    border: 2px solid transparent;
    color: #f9cf84;
    background-color: ${(props) => props.backgroundColor};
    &:hover {
      border: 2px solid white;
      filter: contrast(140%);
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
 }
 `


export const DeleteButton = styled.button ` 
height: 20px;
 width: 20px;
 /* margin-right: 1rem; */
 margin-bottom: 0.5rem;
 /* padding: 0.5rem; */

 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 align-items: center;

 border: 2px solid transparent;
 color: #f9cf84;
 background-color: #0e0c08;
 &:hover {
   border: 1px solid white;
   filter: contrast(140%);
   color: white;
 }

 font-family: "Roboto Condensed", sans-serif;
 font-weight: bold;

 cursor: pointer;

 border: none;
 border-radius: 8px;
 box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.45);
`


export const InputUnits = styled.input `  
height: 50px;
width: 50px;
margin-left: 0.5rem;
border: 2px solid black;
border-radius: 4px;
background-color: #0E0C08;
color: #f9cf84;
font-size: 1rem;
font-weight: bold;
font-family: Oswald, sans-serif;
padding-left: 0.5rem;
box-sizing: border-box;
&::-webkit-inner-spin-button{
 background-color: #f9cf84;

}
`
export const InputBox = styled.div ` 
margin-right: 1.5rem;
display: flex;
align-items: center;

`
