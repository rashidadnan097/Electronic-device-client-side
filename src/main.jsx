import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainRoutes from './Routes/MainRoutes';
import Home from './Pages/Home/Home';
import AddProduct from './Pages/AddProduct/AddProduct';
import MyCart from './Pages/MyCart/MyCart';
import Errorpage from './Pages/ErrorPage/Errorpage';
import Brand from './Pages/Brand/Brand';
import Detail from './Pages/Detail/Detail';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoutes></MainRoutes>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch("/brands.json")
        
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
        
        
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
        
      },
      {
        path: "/brands/:id",
        element: <Brand></Brand>,
        loader: ()=> fetch("/brands.json")
      },
      {
        path: "/details/:id",
        element:<Detail></Detail>,
        loader: ()=> fetch("/brands.json")
      },
     
      
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
