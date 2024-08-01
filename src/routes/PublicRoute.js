import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../services/api/authAPI';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() && restricted ? (
          <Redirect to="/profile" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
