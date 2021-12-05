import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function AuthenticatedRoute({ children, ...rest }) {
  return (
    <Route
      // (we need to spread)
      {...rest} // eslint-disable-line
      render={({ location }) =>
        localStorage.getItem('user') ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default AuthenticatedRoute;

AuthenticatedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
