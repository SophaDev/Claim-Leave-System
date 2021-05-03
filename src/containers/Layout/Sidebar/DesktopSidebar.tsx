import React from 'react';

import SidebarContent from './SidebarContent';

function DesktopSidebar() {
  return (
    <div className="flex-shrink-0 hidden w-64 overflow-y-auto bg-white lg:block">
      <SidebarContent />
    </div>
  );
}

export default DesktopSidebar;
