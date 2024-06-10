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
import PaymentHistory from '../pages/Dashboard/Seller/PaymentHistory'
import AdvertisementRequest from '../pages/Dashboard/Seller/AdvertisementRequest'
import UserHome from '../pages/Dashboard/User/UserHome'
import UserPaymentHistory from '../pages/Dashboard/User/UserPaymentHistory'
import AllCategoryDataTable from '../components/Categories/AllCategoryDataTable'

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
      {
        path: '/allCategory/:category',
        element: <AllCategoryDataTable></AllCategoryDataTable>,
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
    {
      path: 'paymentHistory',
      element: (
        <PaymentHistory></PaymentHistory>
      ),
    },
    {
      path: 'requestAdvertisement',
      element: (
        <AdvertisementRequest></AdvertisementRequest>
      ),
    },
    {
      path: 'userHome',
      element: (
        <UserHome></UserHome>
      ),
    },
    {
      path: 'userPaymentHistory',
      element: (
        <UserPaymentHistory></UserPaymentHistory>
      ),
    },
  ]
  },
])
