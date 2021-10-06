import { useEffect } from "react";
import BeerCard from "../../components/BeerCard";
import { useWedding } from "../../Providers/WeddingList";

export default function WeddingPage() {
  const { weddingList, removeBeer } = useWedding();

  

  return (
    <div>
      <h2>Página do evento casamento.</h2>
      <h4> segue a lista das cervejas.</h4>
    {weddingList.map(item=> <p>{item.name}</p>)} 
      {/* {weddingList.map((item, index) => (
        <BeerCard
          key={item.id}
          index={index}
          type={"eventList"}
          removeButton={removeBeer}
        />
      ))} */}
    </div>
  );
}
