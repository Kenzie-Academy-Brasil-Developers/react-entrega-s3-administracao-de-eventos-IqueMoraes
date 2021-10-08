import { useEffect, useState } from "react";

import AsideMenu from "../../components/Aside";
import BeerCard from "../../components/BeerCard";
import { Body, TitleDiv, PreviewListArea, InfosArea, BeerInfo, InfoButton, Ulist } from "../../components/globalStylesComponents/styles";

import { useCelebration } from "../../Providers/CelebrationList";
import { useGraduation } from "../../Providers/GraduationList";
import { useInfoDetails } from "../../Providers/InfoDetails";
import { useWedding } from "../../Providers/WeddingList";
import { useCervejas } from "../../Providers/Cervejas";

import {
  CardOverflow,
} from "./styles";


export default function Cervejas() {

  
  const { cervejas } = useCervejas();
  const { weddingList } = useWedding();
  const { graduationList } =useGraduation();
  const { celebrationList } = useCelebration();
  const { infoDetails, setInfoDetails } = useInfoDetails();
  const [ previewList, setPreviewList ] = useState([]);

  useEffect(()=> {}, [])
  


  return (
   
    <Body>
      <TitleDiv backgroundColor={"#b59300"}>
        <h2>LISTA DE BEBIDAS</h2>
      </TitleDiv>
      <AsideMenu></AsideMenu>
      <section>
        <CardOverflow>
          {cervejas.map((item, index) => (
            <BeerCard
              key={item.id}
              item={item}
              // index={index + 1}
              type={"shoppingList"}
            />
          ))}
        </CardOverflow>

        <InfosArea>
          <BeerInfo>
            <InfoButton backgroundColor={"#0E0C08"} onClick={() => setInfoDetails("")}>X</InfoButton>

            <div>
              {infoDetails ? (
                <div>
                  <Ulist>
                    <li>
                      <p>{(infoDetails.name).toUpperCase()}</p>
                    </li>
                    <li>
                      <p>ABV: {infoDetails.abv}</p>
                    </li>
                    <li>
                      <p>IBU: {infoDetails.ibu}</p>
                    </li>
                    <li><p>PH: {infoDetails.ph}</p></li>
                   
                    <li>
                      <p>
                        {" "}
                        Volume: {infoDetails.volume.value}{" "}
                        litros
                      </p>
                    </li>
                    <li>
                      {" "}
                      <h4>" {infoDetails.description} "</h4>
                    </li>
                  </Ulist>
                </div>
              ) : (
                <div>
                  <p>Clique na cerveja para saber mais detalhes</p>
                </div>
              )}
            </div>
          </BeerInfo>

          <PreviewListArea>
            <div>
              <InfoButton backgroundColor={"#b11d1d"} onClick={() => setPreviewList(weddingList)}> </InfoButton>
              <InfoButton backgroundColor={"#443887"} onClick={() => setPreviewList(graduationList)}> </InfoButton>
              <InfoButton backgroundColor={"#38873a"} onClick={() => setPreviewList(celebrationList)}> </InfoButton>
              {!previewList ? <h4>Preview da lista</h4> : previewList === weddingList ?  <h4>Lista Casamento</h4> : previewList === graduationList ?  <h4>Lista formatura</h4> :  <h4>Lista confraternização</h4> }
              <InfoButton backgroundColor={"#0E0C08"} onClick={() => setPreviewList(false)}>X</InfoButton>
            </div>

            <ul>
              {!!previewList &&
                previewList.map((item, index) => (
                  <li key={item.id}>
                    {" "}
                    <p>
                      {item.id}-{item.name}{" "}
                    </p>
                  </li>
                ))}
            </ul>
          </PreviewListArea>


          
        </InfosArea>
       
      </section>
    </Body>
    
  )
}