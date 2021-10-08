import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";


const CervejasContext = createContext();

export const CervejasProvider = ({children}) => {
    const [cervejas, setCervejas] = useState([]);

    const getProducts=()=>{
        localStorage.clear();
        axios.get("https://api.punkapi.com/v2/beers")
        .then(res => setCervejas(res.data))
        .catch(err => console.log(err))}
        
        
        useEffect(() => {
            getProducts()
    }, [])


    return (
        <CervejasContext.Provider value={{cervejas}}>
            {children}
        </CervejasContext.Provider>
    )
    
};

export const useCervejas = () => useContext(CervejasContext);