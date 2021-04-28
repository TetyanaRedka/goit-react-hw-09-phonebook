import { createAction } from '@reduxjs/toolkit';

export const registerUserRequest = createAction('user/registerUserRequest');
export const registerUserSuccess = createAction('user/registerUserSuccess');
export const registerUserError = createAction('user/registerUserError');

export const loginUserRequest = createAction('user/loginUserRequest');
export const loginUserSuccess = createAction('user/loginUserSuccess');
export const loginUserError = createAction('user/loginUserError');

export const logoutUserRequest = createAction('user/logoutUserRequest');
export const logoutUserSuccess = createAction('user/logoutUserSuccess');
export const logoutUserError = createAction('user/logoutUserError');

export const getCurrentUserRequest = createAction('user/getCurrentUserRequest');
export const getCurrentUserSuccess = createAction('user/getCurrentUserSuccess');
export const getCurrentUserError = createAction('user/getCurrentUserError');
