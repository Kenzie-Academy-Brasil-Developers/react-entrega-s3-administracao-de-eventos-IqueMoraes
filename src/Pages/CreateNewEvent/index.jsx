import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { WeddingListContext } from "../../Providers/WeddingList";
import { GraduationListContext } from "../../Providers/GraduationList";
import { CelebrationListContext } from "../../Providers/CelebrationList";
import BeerCard from "../../components/BeerCard";

export default function CreateNewEvent() {
  const [drinksList, setDrinksList] = useState([]);
  const { weddingList, addWeddingBeer } = useContext(WeddingListContext);
  const { graduationList, setGraduationList } = useContext(
    GraduationListContext
  );
  const { celebrationList, setCelebrationList } = useContext(
    CelebrationListContext
  );

  const getDrinks = () => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => setDrinksList(response.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDrinks();
    console.log(drinksList)
  }, []);


  return (
    <div>
      Está é a páginda de criar eventos
      <div>
        {drinksList.map((item, index) => (
          <BeerCard
            key={item.id}
            item={item}
            index={index + 1}
            list1={weddingList}
            addButton1={addWeddingBeer}
            list2={graduationList}
            addButton2={setGraduationList}
            list3={celebrationList}
            addButton3={setCelebrationList}
          />
        ))}
      </div>
    </div>
  );
}
