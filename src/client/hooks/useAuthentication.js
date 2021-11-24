import { useEffect, useState } from 'react';
import reactRouterHistory from '../router-history';

function authRedirect() {
  if (reactRouterHistory.window.location.pathname === '/sign-in') {
    reactRouterHistory.push('/profile');
  }
}

/**
 * Docs: https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data
 */
export function useAuthentication({ auth }) {
  // default not authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // default is loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!auth || (auth && auth.inStorybook)) {
      setIsLoading(false);
      return;
    }

    const unubscribe = auth.onAuthStateChanged((user) => {
      // if user exists it means authenticated
      if (user) {
        setIsAuthenticated(true);
        setIsLoading(false);
        authRedirect();
      } else {
        setIsAuthenticated(false);
        setIsLoading(false);
      }
    });

    return () => {
      unubscribe();
    };
  }, [auth]);

  return { isAuthenticated, isLoading };
}
