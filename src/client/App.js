import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './containers/Home/Home';
import AuthenticatedRoute from './components/Auth/AuthenticatedRoute';
import { useAuthentication } from './hooks/useAuthentication';
import Profile from './containers/Profile';
import Loader from './components/Loader';
import ProductPageContainer from './containers/ProductPage/ProductPage.Container';
import { Menu } from './components/menu/Menu.component';

function App() {
  const { isLoading } = useAuthentication();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <Menu />
      <Switch>
        {/* Home page */}
        <Route exact path="/">
          <Home />
        </Route>
        {/* product page */}
        <Route exact path="/containter/ProductPage/:id">
          <ProductPageContainer />
        </Route>

        {/* All routes below are authenticated routes - a user must login first */}
        <AuthenticatedRoute exact path="/profile">
          <Profile />
        </AuthenticatedRoute>
      </Switch>
    </Router>
  );
}

export default App;
