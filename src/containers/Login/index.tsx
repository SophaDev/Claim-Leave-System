import React, { useEffect } from 'react';
import LoginFrom from './components/LoginForm';
// import { appCons } from 'util/appContext';
import { Redirect } from 'react-router-dom';
import useLogin from './service/api';
import { appCons } from '../../util/appContext';
interface User {
  userName: string;
  password: string;
}
const Login: React.FC = () => {
  const { isAuth, login } = appCons();
  const { loading, data, onLogin } = useLogin();

  function handleLogin(data: User) {
    // login();
    onLogin(data);
  }

  useEffect(() => {
    if (data) {
      login(data);
    }
  }, [data]);

  if (isAuth) return <Redirect to="/" />;
  return <LoginFrom loading={loading} onFinish={handleLogin} />;
};

export default Login;
