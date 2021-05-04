import { useState } from 'react';
import { message } from 'antd';
import axios from 'axios';
import { serviceAuthenticate } from '../../../env';
// import { serviceAuthenticate } from 'env';
interface LoginProp {
  loading: boolean;
  data: any;
  onLogin: (data: User) => void;
}
interface User {
  userName: string;
  password: string;
}
function useLogin(): LoginProp {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  function onLogin(data: User) {
    setLoading(true);
    axios
      .post('/users/login', data, {
        headers: { 'Content-Type': 'application/json' },
        baseURL: serviceAuthenticate,
      })
      .then((e) => {
        setData(e.data.results);
        setLoading(false);
        if (e.data.response.code !== 200 && e.data.response.code)
          message.error(e.data.response.message);
      })
      .catch(() => {
        setLoading(false);
      });
  }
  return { loading, data, onLogin };
}
export default useLogin;
