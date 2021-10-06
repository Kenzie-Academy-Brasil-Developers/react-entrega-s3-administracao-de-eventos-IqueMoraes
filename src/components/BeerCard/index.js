import { Container, ImageBox } from "./styles";
import { useWedding } from "../../Providers/WeddingList";
import { useGraduation} from '../../Providers/GraduationList';

export default function BeerCard({
  item,
  index,
  type,
  
}) {

  const { addWeddingBeer } = useWedding();
  const { addGraduationBeer } = useGraduation();
  

  const handleClick = (respectiveFunction, item) => {
    respectiveFunction( item);
  };
  
  return (
    <Container>
      <div>
        <h3>{index}-</h3>
        <h3>{item.name}</h3>
      </div>
      <ImageBox>
        <img src={item.image_url} alt="Imagem do rótulo" />
      </ImageBox>

      <div>{/* <button onClick={()=> }>Mostrar detalhes</button> */}</div>

      <div>
        {type === "shoppingList" && (
          <button onClick={() => handleClick(addWeddingBeer, item)}>
            Adicionar ao Casamento
          </button>
        )}
        {type === "shoppingList" && (
          <button
            onClick={() => handleClick(addGraduationBeer, item)}
          >
            Adicionar à Formatura
          </button>
        )}
        {/* {type === "shoppingList" && (
          <button
            onClick={() => handleClick(addButton3)}
          >
            Adicionar à Confraternização
          </button>
        )}
        {type === "eventList" && (
          <button onClick={() => handleClick(removeButton, item)}>Remover da lista</button>
        )} */}
      </div>
    </Container>
  );
}
