import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './views/Header/Header';

import { useDispatch } from 'react-redux';
import { getCurrentUser } from './redux/userAuth/userOperations';
import PrivateRoute from './Components/UserMenu/PrivateRoute';
import PublicRoute from './Components/UserMenu/PublicRoute';

const Main = lazy(() => import('./views/Main/Main'));
const UserRegisterForm = lazy(() => import('./Components/UserRegisterForm/UserRegisterForm'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Suspense fallback={<p>...</p>}>
        <Switch>
          <Route exact path="/" component="" />
          <PrivateRoute path="/contacts">
            <Main />
          </PrivateRoute>
          <PublicRoute path="/registration" restricted>
            <UserRegisterForm />
          </PublicRoute>
          <PublicRoute path="/login" restricted>
            <UserRegisterForm />
          </PublicRoute>
        </Switch>
      </Suspense>
    </div>
  );
}
