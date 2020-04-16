import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedAdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (sessionStorage.getItem('role') !== 'admin') {
          return <Redirect to="/admin" />;
        }
        return <Component {...rest} {...props} />;
      }}
    />
  );
};

export default ProtectedAdminRoute;
