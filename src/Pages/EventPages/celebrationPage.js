import { useEffect, useState } from "react";
import AsideMenu from "../../components/Aside";
import BeerCard from "../../components/BeerCard";
import { Body, TitleDiv, PreviewListArea, InfosArea, BeerInfo, InfoButton, Ulist, LitresList } from "../../components/globalStylesComponents/styles";

import { useCelebration } from "../../Providers/CelebrationList";
import { useInfoDetails } from "../../Providers/InfoDetails";

import { CardOverflow } from "./styles";

export default function CelebrationPage() {
  const { celebrationList, removeBeer, changeUnit } = useCelebration();
  const { infoDetails, setInfoDetails } = useInfoDetails();

  const [litres, setLitres] = useState([]);

  useEffect(()=>{
    let reduce = celebrationList.reduce((acc,item) => acc + (item.volume.value + item.quantity) ,0);
setLitres(reduce)
  }, [celebrationList])

  

  return (
    <Body>
        
        <TitleDiv backgroundColor={"#38873a"}>
          <h2>BEBIDAS DA CONFRATERNIZAÇÃO</h2>
        </TitleDiv>

        <AsideMenu/>
      
      <section>
        <CardOverflow>
          {celebrationList.map((item, index) => (
            <BeerCard
              key={item.id}
              item={item}
              index={index + 1}
              removeButton={removeBeer}
              changeFucntion={changeUnit}
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
           

            <LitresList>
              <li> <h2> Total: {litres > 0 ? (litres) : 0} Litres </h2></li>
              {celebrationList.map((item, index) => (
                  <li key={item.id}>
                    {" "}
                    <p>
                      {index+1}-{item.name}{" "} unit.{item.volume.value}L
                    </p>
                    <p>Pedido: {item.quantity * item.volume.value} L</p>
                  </li>
                ))}
            </LitresList>
          </PreviewListArea>


          
        </InfosArea>
      </section>
  
  );

    </Body>
  );
}
