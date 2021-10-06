import { createContext, useState } from "react";

export const WeddingListContext = createContext([]);

export const WeddingListProvider = ({ children }) => {
  const [weddingList, setWeddingList] = useState([]);

  const addWeddingBeer = (item) => {
    console.log(weddingList);
    setWeddingList([...weddingList, item]);
  };

  const removeBeer = (beer) => {
    setWeddingList(weddingList.filter((item) => item.id !== beer.id));
  };

  return (
    <WeddingListContext.Provider value={{ weddingList, addWeddingBeer, removeBeer }}>
      {children}
    </WeddingListContext.Provider>
  );
};
