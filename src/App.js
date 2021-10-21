import { HashRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import ImpactPlanner from "./pages/ImpactPlanner";
import AddToMarketplace from "./pages/AddToMarketplace";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

export default function TreesAIWebsite() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/impact-planner">
          <ImpactPlanner />
        </Route>
        <Route path="/add-to-marketplace">
          <AddToMarketplace />
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
