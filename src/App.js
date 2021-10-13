import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import ImpactPlanner from "./pages/ImpactPlanner";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

export default function TreesAIWebsite() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/impact-planner">
          <ImpactPlanner />
        </Route>
        <Route path="/privacy">
          <PrivacyPolicy />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
