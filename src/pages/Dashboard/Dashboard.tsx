import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import profile from '../../assets/images/profile.jpg';
function Dashboard(props: { history: string[] }) {
  return (
    <div>
      <header className="flex items-center justify-between w-full p-4 bg-gradient-to-r from-blue-600 to-blue-300">
        <nav className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="w-7 h-7"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </nav>
        <div className="w-8 h-8 cursor-pointer">
          <img className="rounded-full" src={profile} />
        </div>
      </header>

      <main className="flex w-full h-screen">
        <aside className="hidden h-screen shadow-md w-80 bg-gray sm:block">
          <div className="flex flex-col justify-between h-screen p-2 bg-gray-800">
            <div className="text-sm">
              <div className="p-5 text-white bg-gray-900 rounded cursor-pointer">
                Main Menu
              </div>
              <div className="p-2 mt-2 text-white bg-gray-900 rounded cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                Setting
              </div>
              <div className="p-2 mt-2 text-blue-300 bg-gray-700 rounded cursor-pointer">
                Interface Setting
              </div>
              <div className="flex items-center justify-between p-2 mt-2 text-white bg-gray-900 rounded cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                <span>Reports</span>
                <span className="w-4 h-4 text-xs font-normal text-center text-white bg-blue-600 rounded-full">
                  5
                </span>
              </div>
              <div className="p-2 mt-2 text-white bg-gray-900 rounded cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                List Request Leave
              </div>
              <div className="p-2 mt-2 text-white bg-gray-900 rounded cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                Request Leave
              </div>
            </div>

            <div className="flex p-3 text-sm text-center text-white bg-red-500 rounded cursor-pointer">
              <button className="inline-flex items-center rounded">
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-semibold">Logout</span>
              </button>
            </div>
          </div>
        </aside>

        <section className="w-full p-4">
          <div className="w-full h-64 p-4 border-4 border-dashed text-md">
            Dashboard
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
