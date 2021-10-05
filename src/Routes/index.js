import { Switch, Route } from "react-router-dom"
import CreateNewEvent from "../Pages/CreateNewEvent";
import { Evento1 } from "../Pages/EventPages";

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/">
                Dashboard
            </Route>
            <Route path="/createnewevent">
               <CreateNewEvent/>
            </Route>
            <Route parth="/evento1">
                <Evento1/>
            </Route>
            <Route parth="/evento1">
                Evento 1
            </Route>
        </Switch>
    )
}

export default Routes;