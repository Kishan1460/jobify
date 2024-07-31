import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard';
import { BigSidebar,Logo,Navbar, SmallSidebar } from '../components';

import { createContext,useCallback,useContext,useState } from 'react';

const DashboardContext = createContext();

// eslint-disable-next-line react/prop-types
const DashboardLayout = ({ isDarkThemeEnabled }) => {
  // temp

  const user = {name: 'kishan'}
  const [showSidebar, setShowSidebar] = useState(false);
  const[isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme',newDarkTheme);
    localStorage.setItem('darkTheme',newDarkTheme);
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
    <Wrapper>
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
    </Wrapper>
    </DashboardContext.Provider>
  );
};


// eslint-disable-next-line react-refresh/only-export-components
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout