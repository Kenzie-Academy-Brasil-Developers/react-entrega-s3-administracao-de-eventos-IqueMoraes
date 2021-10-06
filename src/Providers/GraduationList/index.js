import { createContext, useState } from "react";

export const GraduationListContext = createContext([]);

export const GraduationListProvider = ({children}) => {

    const [graduationList, setGraduationList] = useState([]);

    return (
        <GraduationListContext.Provider value={{graduationList, setGraduationList}}>
            {children}
        </GraduationListContext.Provider>
    )
};


