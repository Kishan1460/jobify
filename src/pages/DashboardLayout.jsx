import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard';
import { BigSidebar,Logo,Navbar, SmallSidebar } from '../components';

import { useState } from 'react';
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

  const logoutuser = async = () => {
    console.log('logout user');
  };

  return (
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
  );
};

export default DashboardLayout