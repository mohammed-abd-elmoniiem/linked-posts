
import './App.css'

import '@fortawesome/fontawesome-free/css/all.css'
import { HeroUIProvider } from '@heroui/react';
import { createBrowserRouter } from 'react-router';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Register from './components/Register';
import Login from './components/Login';

import { RouterProvider } from 'react-router';
import UserProvider from './context/userContext';
import Profile from './pages/Profile';
import SinglePost from './pages/SinglePost';
import { QueryClientProvider, QueryClient, QueryObserver } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ProtectingRouting from './components/ProtectingRouting';
import { Provider } from 'react-redux';
import { strore } from './redux/store';
import Redux from './components/Redux';
import { Toaster } from 'react-hot-toast';
import UpdatePost from './components/post/UpdatePost';
import ChangePassword from './components/ChangePassword';


const routers = createBrowserRouter([

  {path:'/',element:<MainLayout/>,children:[
    {
      index:true ,element:<ProtectingRouting><Home/></ProtectingRouting>
    },
    {
      path:'home',element:<ProtectingRouting><Home/></ProtectingRouting> 
    },{
      path:'register',element:<Register/>
    }
    ,
    {
      path:'login',element:<Login/>
    },
    {
      path:'profile',element:<ProtectingRouting><Profile/></ProtectingRouting> 
    },
    {
      path:'single-post/:id',element:<ProtectingRouting><SinglePost/> </ProtectingRouting> 
    },
    {
      path:'update-post/:id',element:<ProtectingRouting><UpdatePost/></ProtectingRouting>
    },
    {
      path:'change-password',element:<ProtectingRouting> <ChangePassword/></ProtectingRouting>
    }
  ]},
  {path:'/redux',element:<Redux/>

  }
]);


export const queryClient = new QueryClient();

function App() {





  return (<>

  <Provider store ={strore} >
    <Toaster/>


      <QueryClientProvider client ={queryClient}>
      <UserProvider>
          <HeroUIProvider>
            <RouterProvider router={routers} />
          </HeroUIProvider>
      </UserProvider>

    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>


  </Provider>

 
  


    </>
  )
}

export default App
