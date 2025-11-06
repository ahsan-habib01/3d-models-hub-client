import { createBrowserRouter } from 'react-router';
import MainLayout from '../layout/MainLayout';
import Home from '../Pages/Home/Home';
import AllModels from '../Pages/AllModels/AllModels';
import Profile from '../Pages/Profile/Profile';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Registration';
import PrivateRoute from './PrivateRoute';
import AddModel from '../Pages/AddModel/AddModel';
import ModelDetails from '../Pages/ModelDetails/ModelDetails';
import UpdateModel from '../Pages/UpdateModel/UpdateModel';
import Loading from '../components/Loading';
import ErrorPage from './../components/ErrorPage';
import MyModels from '../Pages/MyModels/MyModels';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    hydrateFallbackElement: <Loading></Loading>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:3000/latest-models'),
      },
      {
        path: '/all-models',
        element: <AllModels />,
        loader: () => fetch('http://localhost:3000/models'),
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: '/add-model',
        element: (
          <PrivateRoute>
            <AddModel />
          </PrivateRoute>
        ),
      },
      {
        path: '/my-models',
        element: (
          <PrivateRoute>
            <MyModels />
          </PrivateRoute>
        ),
      },
      {
        path: '/model-details/:id',
        element: (
          <PrivateRoute>
            <ModelDetails />
          </PrivateRoute>
        ),
      },

      {
        path: '/update-model/:id',
        element: (
          <PrivateRoute>
            <UpdateModel />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/models/${params.id}`),
      },
      {
        path: '/auth/login',
        element: <Login />,
      },
      {
        path: '/auth/register',
        element: <Register />,
      },
    ],
  },
]);
