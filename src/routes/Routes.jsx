import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import Shop from '../pages/Shop/Shop'
import Cart from '../pages/Cart/Cart'
import Dashboard from '../layouts/Dashboard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/room/:id',
        element: <RoomDetails />,
      },
      {
        path: '/shop',
        element: <Shop></Shop>,
      },
      {
        path: '/cart',
        element: <Cart></Cart>,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/dashboard',
   element: <Dashboard></Dashboard>,
  // children: [
  //   {
  //     index: true,
  //     element: <DashboardHome></DashboardHome>
  //   }
  // ]
  },
])
