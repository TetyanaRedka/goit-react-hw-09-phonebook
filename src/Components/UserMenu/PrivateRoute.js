import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getUserAuthenticated } from '../../redux/userAuth/userSelectors';

export default function PrivateRoute({ children, ...routeProps }) {
  const isAuthenticated = useSelector(getUserAuthenticated);
  return <Route {...routeProps}>{isAuthenticated ? children : <Redirect to="/login" />}</Route>;
}
