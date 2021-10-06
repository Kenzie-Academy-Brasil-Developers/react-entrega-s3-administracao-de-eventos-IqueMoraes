import { Switch, Route } from "react-router-dom"
import CreateNewEvent from "../Pages/CreateNewEvent";
import WeddingPage from "../Pages/EventPages/weddingPage";

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/">
                Dashboard
            </Route>
            <Route path="/createnewevent">
               <CreateNewEvent/>
            </Route>
            <Route parth="/wedding">
                <WeddingPage/>
            </Route>
            <Route parth="/evento1">
                Evento 1
            </Route>
        </Switch>
    )
}

export default Routes;