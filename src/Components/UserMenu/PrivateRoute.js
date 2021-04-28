import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getUserAuthenticated } from '../../redux/userAuth/userSelectors';

const PrivateRoute = ({ component: Component, isAuthenticated, ...routeProps }) => (
  <Route {...routeProps} render={props => (isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)} />
);

const mapStateToProps = state => ({
  isAuthenticated: getUserAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);
