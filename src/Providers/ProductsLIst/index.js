import axios from "axios"
import { createContext, useContext, useState, useEffect } from "react"


const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    const getProducts=()=>{
    axios.get("https://api.punkapi.com/v2/beers")
    .then(res => setProducts(res.data))
    .catch(err => console.log(err))}
    
    
    useEffect(() => {
        getProducts()
}, [])

    console.log(products)
    
    return (
    <ProductsContext.Provider value={{ products }}>
        {children}
    </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext)