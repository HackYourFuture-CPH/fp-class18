import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';

import ResetPassword from './containers/ResetPassword';
import AuthenticatedRoute from './components/Auth/AuthenticatedRoute';
import NonAuthenticatedRoute from './components/Auth/NonAuthenticatedRoute.js';
import ProfilePage from './containers/ProfilePage/ProfilePage.Container';
import OrderPageContainer from './containers/OrderPage/OrderPage.Container';
import Loader from './components/Loader/Loader.component';
import FavoritesPageContainer from './containers/FavoritesPage/FavoritesPage.Container';
import LandingPageContainer from './containers/LandingPage/LandingPage.Container';
import { Menu } from './components/menu/Menu.component';
import { Footer } from './components/Footer/Footer.component';
import ProductPageContainer from './containers/ProductPage/ProductPage.Container';
import reactRouterHistory from './router-history';
import { useFirebase } from './firebase';
import CategoryPage from './containers/CategoryPage/CategoryPage.Container';
import Page404Container from './containers/404Page/404Page.Container';
import ConfirmationPageContainer from './containers/ConfirmationPage/ConfirmationPage.Container';
import MonthlyArrivalsPageContainer from './containers/MonthlyArrivalsPage/MonthlyArrivalsPage.Container';
import AboutpageContainer from './containers/AboutPage/AboutPage.Container';
import ContactpageContainer from './containers/ContactPage/ContactPage.Container';
import CartPageContainer from './containers/CartPage/CartPage.Container';

function App() {
  const { isLoading, isAuthenticated } = useFirebase();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router history={reactRouterHistory}>
      <Menu isAuthenticated={isAuthenticated} />
      <Switch>
        <Route exact path="/">
          <LandingPageContainer />
        </Route>
        <Route exact path="/about-us">
          <AboutpageContainer />
        </Route>
        <Route exact path="/contact-us">
          <ContactpageContainer />
        </Route>
        <Route exact path="/product/:id">
          <ProductPageContainer isAuthenticated={isAuthenticated} />
        </Route>
        <Route exact path="/monthly-arrivals">
          <MonthlyArrivalsPageContainer isAuthenticated={isAuthenticated} />
        </Route>
        <Route exact path="/category/:name">
          <CategoryPage />
        </Route>
        <Route exact path="/cart">
          <CartPageContainer isAuthenticated={isAuthenticated} />
        </Route>
        {/*
         * All routes below are only shown when you are not authenticated - if the
         * user is logged in, if a user is logged in, they can't see the login page
         */}
        <NonAuthenticatedRoute exact path="/sign-in">
          <SignIn />
        </NonAuthenticatedRoute>

        {/* Anonymous pages */}
        <SignIn exact path="/sign-in" />
        <SignUp exact path="/sign-up" />
        <ResetPassword exact path="/reset-password" />

        {/* All routes below are authenticated routes - a user must login first */}
        <AuthenticatedRoute exact path="/order/:id">
          <OrderPageContainer isAuthenticated={isAuthenticated} />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path="/order-confirmation/:id">
          <ConfirmationPageContainer isAuthenticated={isAuthenticated} />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path="/profile">
          <ProfilePage isAuthenticated={isAuthenticated} />
        </AuthenticatedRoute>

        {/* Favorites page */}
        <AuthenticatedRoute exact path="/favorites">
          <FavoritesPageContainer isAuthenticated={isAuthenticated} />
        </AuthenticatedRoute>

        {/* Make sure to keep wildcard "*" routes in the bottom of the Switch */}
        <Route path="*">
          <Page404Container />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
