import { createContext, useContext, useState, useEffect } from "react";

export const CelebrationListContext = createContext([]);

export const CelebrationListProvider = ({ children }) => {
  const [celebrationList, setCelebrationList] = useState(JSON.parse(localStorage.getItem("@ADM_EVNT:celebration_list")) || []);

  const addCelebrationBeer = (item) => {
    if (celebrationList.includes(item)) {
      return celebrationList;
    } else {
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
  return (
    <CelebrationListContext.Provider
      value={{ celebrationList, addCelebrationBeer, removeBeer }}
    >
      {children}
    </CelebrationListContext.Provider>
  );
};

export const useCelebration = () => useContext(CelebrationListContext);
