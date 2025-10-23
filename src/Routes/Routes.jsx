import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllToys from "../Pages/AllToys";
import Details from "../Pages/Details";
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
        element: <Details></Details>,
        loader  : () => fetch("/data.json")
 
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