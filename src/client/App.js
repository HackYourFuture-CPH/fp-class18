import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import ResetPassword from './containers/ResetPassword';
import AuthenticatedRoute from './components/Auth/AuthenticatedRoute';
import { useAuthentication } from './hooks/useAuthentication';
import Profile from './containers/Profile';
import Loader from './components/Loader';
import LandingPageContainer from './containers/LandingPage/LandingPage.Container';
import { Menu } from './components/menu/Menu.component';
import { Footer } from './components/Footer/Footer.component';
import ProductPageContainer from './containers/ProductPage/ProductPage.Container';

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
        <Route exact path="/Container/ProductPage/:id">
          <ProductPageContainer />
        </Route>

        {/* Anonymous pages */}
        <SignIn exact path="/sign-in" />
        <SignUp exact path="/sign-up" />
        <ResetPassword exact path="/reset-password" />

        {/* All routes below are authenticated routes - a user must login first */}
        <AuthenticatedRoute exact path="/profile">
          <Profile />
        </AuthenticatedRoute>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
