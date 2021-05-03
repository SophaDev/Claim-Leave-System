import React, { Suspense, useState } from 'react';
// import Loading from 'components/Loading';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './Main';
import Header from './Header';
import Sidebar from './Sidebar';
// import routes from 'routes';
import useToggle from './toggle';
import { SidebarContext } from '../../util/SidebarContext';
import routes from '../../routes';
// import Loading from '../../components/Loading';
// import { SidebarContext } from 'util/SidebarContext';
const Layout: React.FC = () => {
  const { onToggle, open } = useToggle();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  function toggleSidebar() {
    onToggle(open);
    setIsSidebarOpen(!isSidebarOpen);
  }
  const props = { isSidebarOpen, toggleSidebar };
  return (
    <SidebarContext.Provider value={{ ...props }}>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header onToggle={toggleSidebar} />
          <Main>
            <Switch>
              {routes?.map((route, i) => {
                return route.component ? (
                  <Route
                    key={i}
                    exact={true}
                    path={`/app${route.path}`}
                    render={(props: any) => <route.component {...props} />}
                  />
                ) : null;
              })}
              <Redirect exact from="/" to="/app/dashboard" />
            </Switch>
          </Main>
        </div>
      </div>
    </SidebarContext.Provider>
  );
};

export default Layout;
