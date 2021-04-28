import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './views/Header/Header';

import { connect } from 'react-redux';
import userOperations from './redux/userAuth/userOperations';
import PrivateRoute from './Components/UserMenu/PrivateRoute';
import PublicRoute from './Components/UserMenu/PublicRoute';

const Main = lazy(() => import('./views/Main/Main'));
const UserRegisterForm = lazy(() => import('./Components/UserRegisterForm/UserRegisterForm'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <div>
        <Header />
        <Suspense fallback={<p>...</p>}>
          <Switch>
            <Route exact path="/" component="" />
            <PrivateRoute path="/contacts" component={Main} />
            <PublicRoute path="/registration" restricted component={UserRegisterForm} />
            <PublicRoute path="/login" restricted component={UserRegisterForm} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: userOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
