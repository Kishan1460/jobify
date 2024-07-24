import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard';
import { BigSidebar,Logo,Navbar, SmallSidebar } from '../components';

import { createContext,useCallback,useContext,useState } from 'react';

const DashboardContext = createContext();
const DashboardLayout = () => {
  // temp

  const user = {name: 'kishan'}
  const [showSidebar, setShowSidebar] = useState(false);
  const[isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log('toggle dark theme');
  };
  
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  const logoutuser = async  () => {
    console.log('logout user');
  };

  return (
    <DashboardContext.Provider value = {{
      user,
      showSidebar,
      isDarkTheme,
      toggleDarkTheme,
      toggleSidebar,
      logoutuser,
    }}
    >
      <main className='dashboard'>
        <SmallSidebar/>
        <BigSidebar/>
        <div>
          <Navbar />
          <div className='dashboard-page'>
            <Outlet />
          </div>
        </div>
      </main>
    </DashboardContext.Provider>
  );
};


// eslint-disable-next-line react-refresh/only-export-components
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout