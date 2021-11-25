import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useFirebase } from '../../firebase';

function NonAuthenticatedRoute({ children, ...rest }) {
  const { isAuthenticated } = useFirebase();

  return (
    <Route
      // (we need to spread)
      {...rest} // eslint-disable-line
      render={({ location }) =>
        isAuthenticated ? (
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
