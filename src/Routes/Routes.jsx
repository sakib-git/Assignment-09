import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AllToys from '../Pages/AllToys';
import Details from '../Pages/Details';
import AuthProvider from '../Provider/AuthProvider';
import DetailsProtectedRouter from './DetailsProtectedRouter';
import ProfileProtectedRoute from './ProfileProtectedRoute';
import NotFound from '../Pages/NotFound';
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthProvider>
        <Root></Root>
      </AuthProvider>
    ),

    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/profile',
        element: (
          <ProfileProtectedRoute>
            <Profile></Profile>
          </ProfileProtectedRoute>
        ),
      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>,
      },
      {
        path: '/toyDetails/:toyId',
        element: (
          <DetailsProtectedRouter>
            <Details></Details>
          </DetailsProtectedRouter>
        ),
        loader: () => fetch('/data.json'),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
    path : '/*',
    element : <NotFound></NotFound>
  }
    ],
  },
]);

export default router;
