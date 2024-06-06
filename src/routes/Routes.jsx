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
import DashboardHome from '../pages/Dashboard/Common/DashboardHome'
import ManageUsers from '../pages/Dashboard/Admin/ManageUsers'
import ManageCategory from '../pages/Dashboard/Admin/ManageCategory'
import PaymentManagement from '../pages/Dashboard/Admin/PaymentManagement'
import SalesReport from '../pages/Dashboard/Admin/SalesReport'
import ManageBannerAdvertise from '../pages/Dashboard/Admin/ManageBannerAdvertise'
import SellerHome from '../pages/Dashboard/Seller/SellerHome'
import ManageMedicines from '../pages/Dashboard/Seller/ManageMedicines'

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
  children: [
    {
      index: true,
      element: (
        <DashboardHome></DashboardHome>
      ),
    },
    {
      path: 'manageUsers',
      element: (
        <ManageUsers></ManageUsers>
      ),
    },
    {
      path: 'category',
      element: (
        <ManageCategory></ManageCategory>
      ),
    },
    {
      path: 'paymentManagement',
      element: (
        <PaymentManagement></PaymentManagement>
      ),
    },
    {
      path: 'salesReport',
      element: (
        <SalesReport></SalesReport>
      ),
    },
    {
      path: 'BannerAdvertise',
      element: (
        <ManageBannerAdvertise></ManageBannerAdvertise>
      ),
    },
    {
      path: 'sellerHome',
      element: (
        <SellerHome></SellerHome>
      ),
    },
    {
      path: 'manageMedicine',
      element: (
        <ManageMedicines></ManageMedicines>
      ),
    },
  ]
  },
])
