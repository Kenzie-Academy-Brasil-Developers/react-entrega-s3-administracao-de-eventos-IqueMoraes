import axios from "axios";
import { useEffect, useState} from "react";
import BeerCard from "../../components/BeerCard";

export default function CreateNewEvent() {
  const [drinksList, setDrinksList] = useState([]);

 

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
            type={"shoppingList"}
          />
        ))}
      </div>
    </div>
  );
}
