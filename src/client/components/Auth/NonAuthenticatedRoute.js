import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function NonAuthenticatedRoute({ children, ...rest }) {
  return (
    <Route
      // (we need to spread)
      {...rest} // eslint-disable-line
      render={({ location }) =>
        localStorage.getItem('user') ? (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
}

export default NonAuthenticatedRoute;

NonAuthenticatedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
