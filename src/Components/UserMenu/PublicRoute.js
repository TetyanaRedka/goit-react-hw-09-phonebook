import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getUserAuthenticated } from '../../redux/userAuth/userSelectors';

export default function PublicRoute({ children, ...routeProps }) {
  const isAuthenticated = useSelector(getUserAuthenticated);

  return <Route {...routeProps}>{isAuthenticated && routeProps.restricted ? <Redirect to="/contacts" /> : children}</Route>;
}
