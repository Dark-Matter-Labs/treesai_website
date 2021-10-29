import { HashRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";
import Cities from "./pages/Cities";
import Glasgow from "./pages/Glasgow";
import Steward from "./pages/Steward";
import Invest from "./pages/Invest";
import Portfolio from "./pages/Portfolio";

import "./App.css";

export default function TreesAIWebsite() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Switch>
        <Route exact path="/invest-in-nature/glasgow/steward">
          <Steward />
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
        <Route exact path="/invest-in-nature">
          <Cities />
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
