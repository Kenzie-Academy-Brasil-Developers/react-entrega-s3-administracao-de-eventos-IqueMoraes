import { createContext, useState, useContext } from "react";

export const GraduationListContext = createContext([]);

export const GraduationListProvider = ({children}) => {

    const [graduationList, setGraduationList] = useState([]);

    const addGraduationBeer = (item) => {
        setGraduationList([...graduationList, item]);
        console.log(graduationList);
      };
    
      const removeBeer = (beer) => {
        setGraduationList(graduationList.filter((item) => item.id !== beer.id));
      };

    return (
        <GraduationListContext.Provider value={{graduationList, addGraduationBeer, removeBeer}}>
            {children}
        </GraduationListContext.Provider>
    )
};


export const useGraduation = () => useContext(GraduationListContext);

