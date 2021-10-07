import { Link } from "react-router-dom";
import BeerCard from "../../components/BeerCard";
import { useProducts } from "../../Providers/ProductsLIst";

export default function CreateNewEvent() {
  

const { products } = useProducts();


  

  return (
    <div>
      Está é a páginda de criar eventos
      <div>
        {products.map((item, index) => (
          <BeerCard
            key={item.id}
            item={item}
            index={index + 1}
            type={"shoppingList"}
          />
        ))}
        <Link to ="/weddingpage">Vai para a página de wedding</Link>
      </div>
    </div>
  );
}
