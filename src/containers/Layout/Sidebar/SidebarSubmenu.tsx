import React, { useState } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { DropdownIcon } from '../../../components/Icons/DropdownIcon';
const SidebarSubmenu: React.FC<{ route: any }> = ({ route }) => {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  return (
    <li className="relative px-6 py-3" key={route.name}>
      <button
        className="inline-flex items-center justify-between w-full text-base font-medium duration-150 hover:text-gray-300 focus:outline-none"
        onClick={() => setIsDropdownMenuOpen(!isDropdownMenuOpen)}
      >
        <span className="inline-flex items-center">
          <span>{route.icon}</span>
          <span className="ml-4​​ px-4 ">{route.name}</span>
        </span>
        <DropdownIcon />
      </button>
      <div className={`${isDropdownMenuOpen ? '' : 'hidden'}`}>
        <ul
          className="py-2 mt-2 space-y-2 overflow-hidden text-base font-medium text-gray-500 bg-gray-800 rounded-md"
          aria-label="submenu"
        >
          {route.routes.map((r: any) => (
            <li className="py-1 duration-150 hover:text-gray-400" key={r.name}>
              <div className="relative" key={r.name}>
                <NavLink
                  exact
                  to={r.path}
                  className="inline-flex items-center w-full text-base font-semibold text-gray-400 transition-colors duration-150 hover:text-gray-200"
                  activeClassName="text-gray-500"
                >
                  <Route path={r.path}>
                    <span className="absolute inset-y-0 left-0 w-1 bg-blue-600 rounded-tr-lg rounded-br-lg"></span>
                  </Route>
                  <span className="ml-4">{r.name}</span>
                </NavLink>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default SidebarSubmenu;
