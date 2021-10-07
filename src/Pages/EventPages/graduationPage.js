import { Link } from "react-router-dom";
import BeerCard from "../../components/BeerCard";
import { useGraduation } from "../../Providers/GraduationList";

export default function GraduationPage() {
  const { graduationList, removeBeer } = useGraduation();

  

  return (
    <div>
      <h2>Página do evento casamento.</h2>
      <h4> segue a lista das cervejas.</h4>
      {graduationList.map((item, index) => (
        <BeerCard
          key={item.id}
          item={item}
          index={index}
          type={"eventList"}
          removeButton={removeBeer}
        />
      ))}

      <Link to="/createnewevent"> voltar para lista</Link>
    </div>
  );
}
