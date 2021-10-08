import styled from "styled-components";


export const Body = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 100vh;
    width: 100vw;
    >section{
      /* height: 100%; */
      width: 100%;
      padding-top: 20vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }


  @media (min-width:426px ){

    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    > section {
      height: 100%;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding-top: 90px;
    }
    
  }

`;


export const TitleDiv = styled.div`
  box-shadow: 18px 19px 32px -11px rgba(0, 0, 0, 0.75);
  height: 60px;
  width: 100%;
  background-color: ${props=> props.backgroundColor};
  position: absolute;
  z-index: -1;
  top: 20vh;
  padding-top: 6px;
  padding-left: 4vw;
  > h2 {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 1.6rem;
    font-weight: 600;
    text-align: center;
  }
  @media (min-width: 426px){
    height: 70px;
  width: 100%;
  top: 5vh;

  padding-top: 10px;
  padding-left: 20vw;

  >h2{
    font-size: 3rem
  }
  }
`;



export const PreviewListArea = styled.div ` 
/* max-height: 30%; */
width: 100%;
padding: 0.3rem;

background-color: #B59300;
border-radius: 10px;

overflow: auto;

>div{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

>ul >li{
    border-bottom: 1px solid #594A0B;
    margin-bottom: 0.4rem  ;
    color: #000;
    text-align: left;

}

&::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #0e0c08;
    height: 20px;
  }

  @media (min-width:426px){
    max-height: 30%;
width: 100%;
padding: 0.3rem;

background-color: #B59300;
border-radius: 10px;

overflow: auto;

  }

`

export const InfosArea = styled.section`
  width: 90%;
  margin-right: 0rem;
  @media (min-width: 426px){
    height: 90%;
  width: 30%;
  margin-right: 1rem;
  }
`;

export const BeerInfo = styled.div`
  width: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  

  background-color: #b5b200;
  border-radius: 10px;
  padding: 0.6rem;
  margin-bottom: 2rem;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #0e0c08;
    height: 20px;
  }
  >div{
    width: 100%;
    >p{
      text-align: center;
    }
  }

  @media (min-width: 426px){
    max-height: 60%;
  width: 100%;
  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  

  background-color: #b5b200;
  border-radius: 10px;
  padding: 0.6rem;
  margin-bottom: 2rem;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #0e0c08;
    height: 20px;
  }
  >div{
    width: 100%;
    >p{
      text-align: center;
    }
  }
  }
`;


export const InfoButton = styled.button`
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
  background-color: ${(props) => props.backgroundColor};
  &:hover {
    border: 1px solid white;
    filter: contrast(140%);
    color: white;
  }

  font-family: "Roboto Condensed", sans-serif;
  font-weight: bold;
  /* width: 100%; */

  > span {
  }

  cursor: pointer;

  border: none;
  border-radius: 8px;
  box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.45);
`;


export const Ulist = styled.ul`
  > li {
    margin-bottom: 0.6rem;
    text-align: justify;
  }
`;



export const LitresList = styled.ul ` 
/* position: relative; */
list-style: none;
position: relative;
>li{
  border-bottom: 1px solid #594A0B;
    margin-bottom: 0.4rem  ;
    color: #000;
    text-align: left;
}
>li:first-child{
  background-color: #000;
  color: #B5B202;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 1rem;
  
  
}
`