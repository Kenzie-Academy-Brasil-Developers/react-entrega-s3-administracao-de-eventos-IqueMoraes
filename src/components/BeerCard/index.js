import { Container, ImageBox } from "./styles";
import { useWedding } from "../../Providers/WeddingList";
import { useGraduation } from "../../Providers/GraduationList";
import { useCelebration } from '../../Providers/CelebrationList';

export default function BeerCard({ item, index, type, removeButton }) {
  const { addWeddingBeer } = useWedding();
  const { addGraduationBeer } = useGraduation();
  const { addCelebrationBeer } = useCelebration();

  const handleClick = (respectiveFunction, item) => {
    respectiveFunction(item);
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

      {type === "shoppingList" ? (
        <div>
          <button onClick={() => handleClick(addWeddingBeer, item)}>
            Adicionar ao Casamento{" "}
          </button>

          <button onClick={() => handleClick(addGraduationBeer, item)}>
            Adicionar à Formatura
          </button>

          <button onClick={() => handleClick(addCelebrationBeer, item)}>
            Adicionar à Confraternização
          </button>
        </div>
      ) : (
        <button onClick={() => handleClick(removeButton, item)}>
          Remover da lista
        </button>
      )}
    </Container>
  );
}
