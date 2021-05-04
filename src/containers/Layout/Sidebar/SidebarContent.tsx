import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import routes from '../../../routes/sidebar';
import SidebarSubmenu from './SidebarSubmenu';
function SidebarContent() {
  return (
    <div>
      <div className="h-screen text-gray-500 bg-gray-900">
        <div className="bg-gray-900 ">
          <div className="flex items-center py-6 mx-auto ml-6 text-lg font-bold text-white">
            Claim and Leave
          </div>
        </div>
        <ul className="mt-6">
          {routes.map((route) =>
            route.routes ? (
              <SidebarSubmenu route={route} key={route.name} />
            ) : (
              <div className="relative px-6 py-3" key={route.name}>
                <NavLink
                  exact
                  to={route.path}
                  className="inline-flex items-center w-full text-base font-semibold text-gray-300 transition-colors duration-150 hover:text-gray-600"
                  activeClassName="text-gray-300 dark:text-gray-100"
                >
                  <Route path={route.path}>
                    <span className="absolute inset-y-0 left-0 w-1 bg-blue-600 rounded-tr-lg rounded-br-lg"></span>
                  </Route>
                  {route.icon}
                  <span className="ml-4">{route.name}</span>
                </NavLink>
              </div>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default SidebarContent;
