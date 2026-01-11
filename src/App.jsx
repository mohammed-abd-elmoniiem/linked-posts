
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


const routers = createBrowserRouter([

  {path:'/',element:<MainLayout/>,children:[
    {
      index:true ,element:<Home/>
    },
    {
      path:'home',element:<Home/>
    },{
      path:'register',element:<Register/>
    }
    ,
    {
      path:'login',element:<Login/>
    },
    {
      path:'profile',element:<Profile/>
    },
    {
      path:'single-post/:id',element:<SinglePost/> 
    }
  ]}
])

function App() {



  return (<>
  <UserProvider>
      <HeroUIProvider>
     <RouterProvider router={routers} />
    </HeroUIProvider>
  </UserProvider>
  


    </>
  )
}

export default App
