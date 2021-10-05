import axios from "axios"
import { useEffect, useState } from "react"


export default function CreateNewEvent() {

    const [drinksList, setDrinksList]=useState([]);

    const getDrinks = () =>{
        axios.get("https://api.punkapi.com/v2/beers")
        .then((response) => setDrinksList(response.data))
        .catch((err)=> console.log(err))
    }

    useEffect(()=> {
        getDrinks();
    },[])

    return(
        <div>
            Está é a páginda de criar eventos
            {/* <button onClick={()=> getDrinks()}>fazer lista</button> */}
            <div>
                {drinksList.map(item=> <p key={item.id}> {item.id} - {item.name}</p>)}
            </div>
            
        </div>
    )
}