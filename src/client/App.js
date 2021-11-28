import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import ProfilePageContainer from './containers/ProfilePage/ProfilePage.Container';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import ResetPassword from './containers/ResetPassword';
import AuthenticatedRoute from './components/Auth/AuthenticatedRoute';
import NonAuthenticatedRoute from './components/Auth/NonAuthenticatedRoute.js';

import Loader from './components/Loader';
import { Menu } from './components/menu/Menu.component';
import reactRouterHistory from './router-history';
import { useFirebase } from './firebase';

function App() {
  const { isLoading, isAuthenticated } = useFirebase();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router history={reactRouterHistory}>
      <Menu isAuthenticated={isAuthenticated} />
      <Switch>
        <Route exact path="/pp">
          <ProfilePageContainer />
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
      </Switch>
    </Router>
  );
}

export default App;
