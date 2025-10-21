import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Login from "../Pages/Login";

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
        path : '/login',
        element : <Login></Login>
      }
    ]
  },
]);


export default router