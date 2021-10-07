import { createContext, useState, useContext, useEffect } from "react";

export const GraduationListContext = createContext([]);

export const GraduationListProvider = ({children}) => {

    const [graduationList, setGraduationList] = useState(JSON.parse(localStorage.getItem("@ADM_EVNT:graduation_list")) || []);

    const addGraduationBeer = (item) => {
      if (graduationList.includes(item)) {
        return graduationList 
      }
      else{
        setGraduationList([...graduationList, item].sort((a,b)=> a.id-b.id));
        localStorage.setItem("@ADM_EVNT:graduation_list", JSON.stringify(graduationList));
      };
    }


      useEffect(() => {
        localStorage.setItem("@ADM_EVNT:graduation_list", JSON.stringify(graduationList));
      }, [graduationList])
    
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

