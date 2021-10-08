import { useHistory } from "react-router";
import AsideMenu from "../../components/Aside";
import { Main, EventButton } from "./styles";
import {Body, TitleDiv } from "../../components/globalStylesComponents/styles"


export default function Dashboard(){
    
    const history = useHistory();

    return(
        <Body>
                <TitleDiv backgroundColor={"#b59300"}>
                    <h2>ADMINISTRAÇÃO DE EVENTOS</h2>
                </TitleDiv>
            <AsideMenu/>
            <section>
                <Main>
                    <div>
                        <EventButton backgroundColor={"#0E0D08"}>
                            <span>CASAMENTO</span>
                            bebidas
                        </EventButton>
                        <EventButton backgroundColor={"#0E0D08"}>
                            <span>FORMATURA</span>
                            bebidas
                        </EventButton>
                        <EventButton backgroundColor={"#0E0D08"}>
                            <span>CONFRATERNIZAÇÃO</span>
                            bebidas
                        </EventButton>
                    </div>

                    <button onClick={()=> history.push("/cervejas")}><span>Lista de produtos</span></button>
                </Main>
            </section>
            

        </Body>
    )
}