
import './App.css'

import '@fortawesome/fontawesome-free/css/all.css'
import { HeroUIProvider } from '@heroui/react';
import { createBrowserRouter } from 'react-router';
import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import { RouterProvider } from 'react-router';


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
    }
  ]}
])

function App() {



  return (<>
    <HeroUIProvider>
     <RouterProvider router={routers} />
    </HeroUIProvider>


    </>
  )
}

export default App
