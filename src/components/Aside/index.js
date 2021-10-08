import { Link } from 'react-router-dom';
import {Aside} from './styles';

export default function AsideMenu(){

    return(
        <Aside>


        <Link to="/">Home</Link>
        <Link to="/cervejas">Lista de cervejas</Link>
        <Link to="/weddingpage">Casamento</Link>
        <Link to="/graduationpage">Formatura</Link>
        <Link to="/celebrationpage">Confraternização</Link>


        </Aside>

)
}