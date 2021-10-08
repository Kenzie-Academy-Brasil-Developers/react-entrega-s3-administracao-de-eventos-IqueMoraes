import { createContext, useContext, useState, useEffect } from "react";

export const CelebrationListContext = createContext([]);

export const CelebrationListProvider = ({ children }) => {
  const [celebrationList, setCelebrationList] = useState(
    JSON.parse(localStorage.getItem("@ADM_EVNT:celebration_list")) || []
  );

  const addCelebrationBeer = (item) => {
    if (celebrationList.includes(item)) {
      return celebrationList;
    } else {
      item.quantity = Number(1);
      setCelebrationList(
        [...celebrationList, item].sort((a, b) => a.id - b.id)
      );
      localStorage.setItem(
        "@ADM_EVNT:celebration_list",
        JSON.stringify(celebrationList)
      );
    }
  };

  useEffect(() => {
    localStorage.setItem(
      "@ADM_EVNT:celebration_list",
      JSON.stringify(celebrationList)
    );
  }, [celebrationList]);

  const removeBeer = (beer) => {
    setCelebrationList(celebrationList.filter((item) => item.id !== beer.id));
  };

  const changeUnit = (beer, unit) => {
    beer.quantity = unit;
    let newList = celebrationList.filter((item) => item.id !== beer.id);

    setCelebrationList(...newList, beer);
    setCelebrationList(celebrationList.sort((a, b) => a - b));
    localStorage.setItem(
      "@ADM_EVNT:celebration_list",
      JSON.stringify(celebrationList)
    );
  };

  return (
    <CelebrationListContext.Provider
      value={{ celebrationList, addCelebrationBeer, removeBeer, changeUnit }}
    >
      {children}
    </CelebrationListContext.Provider>
  );
};

export const useCelebration = () => useContext(CelebrationListContext);
