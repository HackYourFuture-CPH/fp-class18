import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import ResetPassword from './containers/ResetPassword';
import AuthenticatedRoute from './components/Auth/AuthenticatedRoute';
import NonAuthenticatedRoute from './components/Auth/NonAuthenticatedRoute.js';
import ProfilePageContainer from './containers/ProfilePage/ProfilePage.Container';
import Loader from './components/Loader';
import LandingPageContainer from './containers/LandingPage/LandingPage.Container';
import { Menu } from './components/menu/Menu.component';
import ProductPageContainer from './containers/ProductPage/ProductPage.Container';
import reactRouterHistory from './router-history';
import { useFirebase } from './firebase';
import CategoryPage from './containers/CategoryPage/CategoryPage.Container';
import Page404Container from './containers/404Page/404Page.Container';
import MonthlyArrivalsPageContainer from './containers/MonthlyArrivalsPage/MonthlyArrivalsPage.Container';

function App() {
  const { isLoading, isAuthenticated } = useFirebase();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router history={reactRouterHistory}>
      <Menu isAuthenticated={isAuthenticated} />

      <Switch>
        {/* <Route exact path="/pp">
          <ProfilePageContainer />
        </Route> */}
        <Route exact path="/profile">
          <ProfilePageContainer />
        </Route>
        <Route exact path="/">
          <LandingPageContainer />
        </Route>
        <Route exact path="/product/:id">
          <ProductPageContainer />
        </Route>
        <Route exact path="/monthly-arrivals">
          <MonthlyArrivalsPageContainer />
        </Route>
        <Route exact path="/category/:name">
          <CategoryPage />
        </Route>
        {/*
         * All routes below are only shown when you are not authenticated - if the
         * user is logged in, if a user is logged in, they can't see the login page
         */}
        <NonAuthenticatedRoute exact path="/sign-in">
          <SignIn />
        </NonAuthenticatedRoute>

        <NonAuthenticatedRoute exact path="/sign-up">
          <SignUp />
        </NonAuthenticatedRoute>

        <NonAuthenticatedRoute exact path="/reset-password">
          <ResetPassword />
        </NonAuthenticatedRoute>

        {/* All routes below are authenticated routes - a user must login first */}

        {/* Make sure to keep wildcard "*" routes in the bottom of the Switch */}
        <Route path="*">
          <Page404Container />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
