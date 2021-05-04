import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loading from '../../components/Loading';
import wrapComponent from './components/HOC';
import Protect from './components/HOC/ProtectRoute';
const Layout = React.lazy(() => import('../Layout'));
const Login = React.lazy(() => import('../Login'));
const App: React.FC<{ isAuth: boolean }> = ({ isAuth }) => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Protect isAuth={isAuth} path="/" component={Layout} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};
export default wrapComponent(App);
