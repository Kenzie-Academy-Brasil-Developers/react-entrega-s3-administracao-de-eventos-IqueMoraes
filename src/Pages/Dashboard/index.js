import { Link } from "react-router-dom";
import AsideMenu from "../../components/Aside";
import { Body,Aside, TitleDiv, Main, EventButton } from "./styles";


export default function Dashboard(){

    return(
        <Body>
                <TitleDiv>
                    <h2>Administração de eventos</h2>
                </TitleDiv>
            <AsideMenu>

            

            </AsideMenu>
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

                    <button ><span>Lista de produtos</span></button>
                </Main>
            </section>
            

        </Body>
    )
}