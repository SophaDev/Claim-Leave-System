import React from 'react';
interface Props {
  isSidebarOpen: boolean;
  toggleSidebar: (open: any) => void;
}
// create context
const SidebarContext = React.createContext({} as Props);
// Consummer
const appSidebar = (): Props => React.useContext(SidebarContext);
export { appSidebar, SidebarContext };
