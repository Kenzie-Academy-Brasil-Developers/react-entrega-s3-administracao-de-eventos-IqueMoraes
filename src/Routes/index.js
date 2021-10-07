import { Switch, Route } from "react-router-dom";
import CreateNewEvent from "../Pages/CreateNewEvent";
import Dashboard from "../Pages/Dashboard";
import GraduationPage from "../Pages/EventPages/graduationPage";
import WeddingPage from "../Pages/EventPages/weddingPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />

      </Route>
      <Route path="/createnewevent">
        <CreateNewEvent />
      </Route>
      <Route path="/weddingpage">
        <WeddingPage />
      </Route>
      <Route path="/graduationpage">
        <GraduationPage />
      </Route>
    </Switch>
  );
};

export default Routes;
