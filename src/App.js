import { HashRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import Cities from "./pages/Cities";
import Glasgow from "./pages/Glasgow";
import Steward from "./pages/Steward";
import Invest from "./pages/Invest";
import Portfolio from "./pages/Portfolio";
import FAQ from "./pages/FAQ";
import StewardMain from "./pages/StewardMain";
import Gift from "./pages/Gift";

import ImpactPlanner from "./pages/DemoGathering2022/ImpactPlanner";
import SelectCity from "./pages/DemoGathering2022/SelectCity";
import ProjectInput from "./pages/DemoGathering2022/ProjectInput";

import "./App.css";

export default function TreesAIWebsite() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Switch>
        <Route exact path="/project-input">
          <ProjectInput />
        </Route>
        <Route exact path="/select-city">
          <SelectCity />
        </Route>
        <Route exact path="/impact-planner-2022">
          <ImpactPlanner />
        </Route>
        <Route exact path="/invest-in-nature/glasgow/invest">
          <Invest />
        </Route>
        <Route exact path="/invest-in-nature/glasgow/invest/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/invest-in-nature/glasgow">
          <Glasgow />
        </Route>
        <Route exact path="/become-a-steward/glasgow/steward">
          <Steward />
        </Route>
        <Route exact path="/become-a-steward">
          <StewardMain />
        </Route>
        <Route exact path="/invest-in-nature">
          <Cities />
        </Route>
        <Route exact path="/faq">
          <FAQ />
        </Route>
        <Route exact path="/gift">
          <Gift />
        </Route>
        <Route path="/privacy">
          <PrivacyPolicy />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </HashRouter>
  );
}
