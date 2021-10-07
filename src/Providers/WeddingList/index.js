import { createContext, useState, useContext, useEffect } from "react";

export const WeddingListContext = createContext([]);

export const WeddingListProvider = ({ children }) => {
  const [weddingList, setWeddingList] = useState(JSON.parse(localStorage.getItem("@ADM_EVNT:wedding_list")) || []);

  const addWeddingBeer = (item) => {
    if (weddingList.includes(item)) {
      return weddingList 
    }
    else{

      setWeddingList([...weddingList, item].sort((a,b)=> a.id-b.id));
      localStorage.setItem("@ADM_EVNT:wedding_list", JSON.stringify(weddingList));
    }

  };

  useEffect(() => {
    localStorage.setItem("@ADM_EVNT:wedding_list", JSON.stringify(weddingList));
  }, [weddingList])

  const removeBeer = (beer) => {
    setWeddingList(weddingList.filter((item) => item.id !== beer.id));
  };

 

  return (
    <WeddingListContext.Provider value={{ weddingList, addWeddingBeer, removeBeer }}>
      {children}
    </WeddingListContext.Provider>
  );
};

export const useWedding = () => useContext(WeddingListContext);