import {
  BeerNameBox,
  ButtonsBox,
  Container,
  ImageBox,
  AddButton,
  DeleteButton,
  InputUnits,
  InputBox
} from "./styles";
import { useWedding } from "../../Providers/WeddingList";
import { useGraduation } from "../../Providers/GraduationList";
import { useCelebration } from "../../Providers/CelebrationList";
import { useInfoDetails } from "../../Providers/InfoDetails";

export default function BeerCard({
  item,
  index,
  type,
  removeButton,
  changeFucntion,
}) {
  const { addWeddingBeer } = useWedding();
  const { addGraduationBeer } = useGraduation();
  const { addCelebrationBeer } = useCelebration();
  const { setInfoDetails } = useInfoDetails();

  const handleClick = (respectiveFunction, item) => {
    respectiveFunction(item);
  };

  return (
    <Container onClick={() => handleClick(setInfoDetails, item)}>
      <BeerNameBox>
        {/* <h3>{index}-</h3> */}
        <h3>{item.name}</h3>
      </BeerNameBox>
      <ImageBox>
        <img src={item.image_url} alt="Imagem do rótulo" />
      </ImageBox>

      {type === "shoppingList" ? (
        <ButtonsBox>
          <AddButton
            backgroundColor={"#b11d1d"}
            onClick={() => handleClick(addWeddingBeer, item)}
          >
            Add <span>Casam.</span>
          </AddButton>

          <AddButton
            backgroundColor={"#443887"}
            onClick={() => handleClick(addGraduationBeer, item)}
          >
            Add <span>Format.</span>
          </AddButton>

          <AddButton
            backgroundColor={"#38873a"}
            onClick={() => handleClick(addCelebrationBeer, item)}
          >
            Add <span>Confrat.</span>
          </AddButton>
        </ButtonsBox>
      ) : (
        <ButtonsBox>
          <InputBox>
            <h3>Unidades:</h3>
            <InputUnits
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => changeFucntion(item, Number(e.target.value))}
            />
          </InputBox>

          <DeleteButton onClick={() => handleClick(removeButton, item)}>
            X
          </DeleteButton>
        </ButtonsBox>
      )}
    </Container>
  );
}
