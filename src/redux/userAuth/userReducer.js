import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  getCurrentUserError,
  getCurrentUserSuccess,
  loginUserError,
  loginUserSuccess,
  logoutUserError,
  logoutUserSuccess,
  registerUserError,
  registerUserSuccess,
} from './userActions';

const initUser = { name: null, email: null };

const user = createReducer(initUser, {
  [registerUserSuccess]: (_, { payload }) => payload.user,
  [loginUserSuccess]: (_, { payload }) => payload.user,
  [logoutUserSuccess]: () => initUser,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registerUserSuccess]: (_, { payload }) => payload.token,
  [loginUserSuccess]: (_, { payload }) => payload.token,
  [logoutUserSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [registerUserError]: setError,
  [loginUserError]: setError,
  [logoutUserError]: setError,
  [getCurrentUserError]: setError,
});

const isAuthenticated = createReducer(false, {
  [registerUserSuccess]: () => true,
  [loginUserSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,

  [logoutUserSuccess]: () => false,
  [registerUserError]: () => false,
  [loginUserError]: () => false,
  [getCurrentUserError]: () => false,
  [logoutUserError]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  isAuthenticated,
});
