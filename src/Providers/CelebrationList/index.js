import { createContext, useState } from "react";

export const CelebrationListContext = createContext([]);

export const CelebrationListProvider = ({children}) => {

    const [celebrationList, setCelebrationList] = useState([]);

    return (
        <CelebrationListContext.Provider value={{celebrationList, setCelebrationList}}>
            {children}
        </CelebrationListContext.Provider>
    )
};
