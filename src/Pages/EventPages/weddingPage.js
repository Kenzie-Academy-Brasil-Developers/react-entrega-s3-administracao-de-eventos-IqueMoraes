import { useContext } from "react";
import BeerCard from "../../components/BeerCard";
import { WeddingListContext } from "../../Providers/WeddingList";


export default function WeddingPage() {
    const {weddingList, removeBeer }= useContext(WeddingListContext);

    console.log(weddingList);

    return (
<div>
    {weddingList.map((item, index)=> <BeerCard key={item.id} index={index} removeButton={removeBeer} />)}
</div>
    )
}