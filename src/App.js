import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LBSToolPage from './pages/tools/LBSToolPage';
import EcosystemServicesToolPage from './pages/tools/EcosystemServicesToolPage';
import ResilienceCompassToolPage from './pages/tools/ResilienceCompassToolPage';
import RegistryPortfolioToolPage from './pages/tools/RegistryPortfolioToolPage';
import ScrollToTop from './components/ScrollToTop';

import './App.css';

export default function TreesAIWebsite() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path='/privacy'>
          <PrivacyPolicy />
        </Route>
        <Route path='/tools/lbs'>
          <LBSToolPage />
        </Route>
        <Route path='/tools/ecosystem-services'>
          <EcosystemServicesToolPage />
        </Route>
        <Route path='/tools/resilience-compass'>
          <ResilienceCompassToolPage />
        </Route>
        <Route path='/tools/registry-portfolio'>
          <RegistryPortfolioToolPage />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
