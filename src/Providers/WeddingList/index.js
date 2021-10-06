import axios from "axios";
import { createContext, useState, useContext } from "react";
import { useEffect } from "react/cjs/react.development";

export const WeddingListContext = createContext([]);

export const WeddingListProvider = ({ children }) => {
  const [weddingList, setWeddingList] = useState([]);

  const addWeddingBeer = (item) => {
    setWeddingList([...weddingList, item]);
    console.log(item);
  };

  const removeBeer = (beer) => {
    setWeddingList(weddingList.filter((item) => item.id !== beer.id));
  };

  // useEffect(()=> {
  //   axios.get().then((reponse)=> )
  // })

  return (
    <WeddingListContext.Provider value={{ weddingList, addWeddingBeer, removeBeer }}>
      {children}
    </WeddingListContext.Provider>
  );
};

export const useWedding = () => useContext(WeddingListContext);