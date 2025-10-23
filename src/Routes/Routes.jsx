import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllToys from "../Pages/AllToys";
import CardData from "../Componet/CardData";
import ProductDetails from "../Componet/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    
    children : [
      {
        index : true,
        element : <Home></Home>
      },
      {
        path : '/profile',
        element : <Profile></Profile>
      },
      {
        path : '/alltoys',
        element : <AllToys></AllToys>
      },
      {
        path : '/toyDetails/:toyId',
        element: <ProductDetails></ProductDetails>,
 
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/register',
        element :<Register></Register>
      }
    ]
  },
]);


export default router