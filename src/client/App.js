import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import ResetPassword from './containers/ResetPassword';
import AuthenticatedRoute from './components/Auth/AuthenticatedRoute';
import { useAuthentication } from './hooks/useAuthentication';
import Profile from './containers/Profile';
import Loader from './components/Loader';
import OrderPageContainer from './containers/OrderPage/OrderPage.Container';
import LandingPageContainer from './containers/LandingPage/LandingPage.Container';
import { Menu } from './components/menu/Menu.component';

function App() {
  const { isLoading } = useAuthentication();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <Menu isAuthenticated={false} />
      <Switch>
        <Route exact path="/">
          <LandingPageContainer />
        </Route>
        {/* Order Page */}

        {/* Anonymous pages */}
        <SignIn exact path="/sign-in" />
        <SignUp exact path="/sign-up" />
        <ResetPassword exact path="/reset-password" />

        {/* All routes below are authenticated routes - a user must login first */}
        <Route exact path="/Container/OrderPage/:id">
          <OrderPageContainer />
        </Route>

        <AuthenticatedRoute exact path="/profile">
          <Profile />
        </AuthenticatedRoute>
      </Switch>
    </Router>
  );
}

export default App;
