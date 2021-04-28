import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'; // toolkit
// import logger from 'redux-logger';

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
// import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';

import contactReducer from './contact/contactReducer';
import userReducer from './userAuth/userReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
]; //toolkit

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

//store on toolkit
const store = configureStore({
  reducer: {
    contacts: contactReducer,
    user: persistReducer(authPersistConfig, userReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
