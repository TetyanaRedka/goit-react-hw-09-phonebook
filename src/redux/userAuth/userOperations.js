import axios from 'axios';
import {
  getCurrentUserError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  loginUserError,
  loginUserRequest,
  loginUserSuccess,
  logoutUserError,
  logoutUserRequest,
  logoutUserSuccess,
  registerUserError,
  registerUserRequest,
  registerUserSuccess,
} from './userActions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const registerUser = user => async dispatch => {
  dispatch(registerUserRequest());
  try {
    const responce = await axios.post('/users/signup', user);

    token.set(responce.data.token);
    dispatch(registerUserSuccess(responce.data));
  } catch (error) {
    dispatch(registerUserError(error.message));
  }
};

const loginUser = user => async dispatch => {
  dispatch(loginUserRequest());
  try {
    const responce = await axios.post('/users/login', user);

    token.set(responce.data.token);
    dispatch(loginUserSuccess(responce.data));
  } catch (error) {
    dispatch(loginUserError(error.message));
  }
};

const logoutUser = () => async dispatch => {
  dispatch(logoutUserRequest());

  try {
    await axios.post('/users/logout');

    token.unset();
    dispatch(logoutUserSuccess());
  } catch (error) {
    dispatch(logoutUserError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    user: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);

  dispatch(getCurrentUserRequest());

  try {
    const responce = await axios.get('/users/current');

    dispatch(getCurrentUserSuccess(responce.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};

export default { registerUser, loginUser, logoutUser, getCurrentUser };
