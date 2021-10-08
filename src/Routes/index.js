import { Switch, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Cervejas from "../Pages/Cervejas";
import GraduationPage from "../Pages/EventPages/graduationPage";
import WeddingPage from "../Pages/EventPages/weddingPage";
import CelebrationPage from "../Pages/EventPages/celebrationPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/cervejas">
        <Cervejas />
      </Route>
      <Route path="/weddingpage">
        <WeddingPage />
      </Route>
      <Route path="/graduationpage">
        <GraduationPage />
      </Route>
      <Route path="/celebrationpage">
        <CelebrationPage />
      </Route>
    </Switch>
  );
};

export default Routes;
