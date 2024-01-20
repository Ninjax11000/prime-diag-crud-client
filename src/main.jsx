import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import ServiceDetails from './Components/ServiceDetails.jsx';
import CheckOut from './Components/CheckOut.jsx';
import AuthProviders from './providers/AuthProviders.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';
import Bookings from './Components/Bookings.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/services/:id',
        element:<ServiceDetails></ServiceDetails>,
        loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path:'/checkout/:id',
        element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path:'/bookings',
        element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProviders>
   <RouterProvider router={router} />
   </AuthProviders>
  </React.StrictMode>,
)
