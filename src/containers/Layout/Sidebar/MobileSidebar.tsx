import React, { useContext, useState } from 'react';
import { appSidebar } from '../../../util/SidebarContext';

import SidebarContent from './SidebarContent';

function MobileSidebar() {
  const { isSidebarOpen } = appSidebar();

  return (
    <div>
      <div
        className={`fixed inset-y-0  flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white lg:hidden ${
          isSidebarOpen ? '' : 'hidden'
        } `}
      >
        <SidebarContent />
      </div>
    </div>
  );
}

export default MobileSidebar;
