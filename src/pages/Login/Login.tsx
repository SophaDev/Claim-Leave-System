import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
  const history = useHistory();
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleInput = (event: any) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (e: any) => {
    try {
      const { data } = await axios.post(
        'http://114.119.182.183:8080/ClaimRest/users/login',
        {
          ...state,
        }
      );
      console.log('result==>', data);
      if (data?.response?.code === 200) {
        localStorage.setItem('token', JSON.stringify(data.results));
        history.push('/dashboard');
      } else {
        alert('Incorrect email or password !');
      }
    } catch (error) {
      if (error.response.status === 401) {
        alert('Please try again');
        return;
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-md shadow-md sm:px-6 md:px-8 lg:px-10">
        <div className="text-xl font-medium text-center text-gray-800 sm:text-2xl">
          Claim & Leave System
        </div>
        <form className="mt-10" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-6">
            <label className="mb-1 text-xs text-gray-600 sm:text-sm">
              Username:
            </label>
            <div className="relative">
              <div className="absolute inline-flex items-center justify-center w-10 h-full text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
                </svg>
              </div>
              <input
                onChange={handleInput}
                value={state.email}
                type="email"
                name="email"
                className="w-full py-2 pl-10 pr-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <label className="mb-1 text-sm text-gray-600">Password:</label>
            <div className="relative">
              <div className="absolute top-0 left-0 inline-flex items-center justify-center w-10 h-full text-gray-400">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-5 7.723v2.277h-2v-2.277c-.595-.347-1-.984-1-1.723 0-1.104.896-2 2-2s2 .896 2 2c0 .738-.404 1.376-1 1.723zm-5-7.723v-4c0-2.206 1.794-4 4-4 2.205 0 4 1.794 4 4v4h-8z" />
                  </svg>
                </span>
              </div>
              <input
                onChange={handleInput}
                value={state.password}
                type="password"
                name="password"
                className="w-full py-2 pl-10 pr-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-400"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex items-center mb-6 -mt-4">
            <a
              href="#"
              className="inline-flex ml-auto text-xs text-blue-500 sm:text-sm hover:text-blue-700"
            >
              Forgot Your Password?
            </a>
          </div>
          <div className="flex w-full">
            <button
              type="button"
              onClick={handleSubmit}
              className="flex justify-center w-full py-2 text-sm text-white bg-blue-600 rounded focus:outline-none sm:text-base hover:bg-blue-700"
            >
              <p className="mr-2 uppercase">Login</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
