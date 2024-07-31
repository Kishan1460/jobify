import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  AllJobs,
  Stats,
  Profile,
} from './pages'

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  // console.log(isDarkTheme);
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
}

const isDarkThemeEnabled = checkDefaultTheme(); 


const router  = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children:  [
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />,
        children: [
          {
            index: true,
            element: <AddJob/>,
          },
          {
            path: 'stats',
            element: <Stats/>,
          },
          {
            path: 'all-jobs',
            element: <AllJobs/>,
          },
          {
            path: 'profile',
            element: <Profile/>,
          }
        ]
      },
    ]
  },

]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App
