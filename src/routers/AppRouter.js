import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import EditCourseRecommendationPage from '../components/EditCourseRecommendationPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import CurriculumSelectorDashboard from '../components/CurriculumSelectorDashboard';
import RecommendationsDashboard from '../components/RecommendationsDashboard';
import PortfolioDashboard from '../components/PortfolioDashboard';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/curriculumSelectorDashboard" component={CurriculumSelectorDashboard}/>
        <PrivateRoute path="/recommendationsDashboard" component={RecommendationsDashboard}/>
        <PrivateRoute path="/portfolioDashboard" component={PortfolioDashboard}/>
        <PrivateRoute path="/edit/:id" component={EditCourseRecommendationPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
