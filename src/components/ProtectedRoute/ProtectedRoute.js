import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (sessionStorage.getItem('logged') != 'true') {
          return <Redirect to="/login" />;
        }
        return <Component {...rest} {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
