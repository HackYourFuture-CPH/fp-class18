import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from './components/Auth/AuthenticatedRoute';
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
import ScrollToTop from './ScrollToTop';

function App() {
  const { isLoading, isAuthenticated } = useFirebase();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router history={reactRouterHistory}>
      <Menu isAuthenticated={isAuthenticated} />
      <ScrollToTop>
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
      </ScrollToTop>
      <Footer />
    </Router>
  );
}

export default App;
