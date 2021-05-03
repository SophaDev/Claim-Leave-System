import React from 'react';
import { MenuIcon } from '../../../components/Icons';

const Hamburger: React.FC<{ clickMenu: any }> = ({ clickMenu }) => {
  return (
    <button
      className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
      onClick={clickMenu}
    >
      <MenuIcon />
    </button>
  );
};
export default Hamburger;
