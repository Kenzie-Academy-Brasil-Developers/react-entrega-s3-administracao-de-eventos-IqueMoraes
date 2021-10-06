import { Container, ImageBox } from "./styles";


export default function BeerCard({
  item,
  index,
  list1,
  addButton1 = false,
  list2,
  addButton2 = false,
  list3,
  addButton3 = false,
  removeButton = false,
}) {
  

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
        {addButton1 && (
          <button onClick={() => handleClick(addButton1)}>
            Adicionar ao Casamento
          </button>
        )}
        {addButton1 && (
          <button
            onClick={() => handleClick(addButton2)}
          >
            Adicionar à Formatura
          </button>
        )}
        {addButton1 && (
          <button
            onClick={() => handleClick(addButton3)}
          >
            Adicionar à Confraternização
          </button>
        )}
        {removeButton && (
          <button onClick={() => handleClick(removeButton)}>Remover da lista</button>
        )}
      </div>
    </Container>
  );
}
