import { GoHomeFill } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import avatarImg from "../../assets/images/placeholder.jpg";
import { FaUsersCog } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { RiAdvertisementFill } from "react-icons/ri";

const AdminDashboard = () => {
  const {user} = useAuth();
  console.log(user)
  return (
    <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-[#9fe870] border-r rtl:border-r-0">
            <Link to="/" className="flex items-center gap-2 ">
              <img
                // className='hidden md:block'
                src="medicine.png"
                alt="logo"
                width="30"
                height="30"
                className="w-10"
              />
              <h2 className="text-green-900 text-2xl md:text-3xl font-bold">
                Ousodh<span>Chai</span>
              </h2>
            </Link>
      <div className="flex flex-col items-center mt-6 -mx-2">
        <img
          className="object-cover w-24 h-24 mx-2 rounded-full"
          src={user && user.photoURL ? user.photoURL : avatarImg}
          alt="avatar"
        />
        <h4 className="mx-2 mt-2 font-medium text-gray-800">
          {user && user.displayName}
        </h4>
        <p className="mx-2 mt-1 text-sm font-medium text-gray-600 ">
          {user && user.email}
        </p>
      </div>
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <NavLink
          to="dashboardHome"
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
          >
            <GoHomeFill />
            <span className="mx-4 font-medium">Home</span>
          </NavLink>
          <NavLink
            className="flex items-center px-4 py-2 mt-5 text-gray-800 transition-colors duration-300 transform rounded-lg dark:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
          >
            <FaUsersCog />
            <span className="mx-4 font-medium">Users</span>
          </NavLink>
          <NavLink
            className="flex items-center px-4 py-2 mt-5 text-gray-800 transition-colors duration-300 transform rounded-lg dark:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
          >
            <BiSolidCategoryAlt />
            <span className="mx-4 font-medium">Category</span>
          </NavLink>
          <NavLink
            className="flex items-center px-4 py-2 mt-5 text-gray-800 transition-colors duration-300 transform rounded-lg dark:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
          >
            <MdOutlinePayment />
            <span className="mx-4 font-medium">Payment</span>
          </NavLink>
          <NavLink
            className="flex items-center px-4 py-2 mt-5 text-gray-800 transition-colors duration-300 transform rounded-lg dark:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
          >
            <TbReportAnalytics />
            <span className="mx-4 font-medium">Sales Report</span>
          </NavLink>
          <NavLink
            className="flex items-center px-4 py-2 mt-5 text-gray-800 transition-colors duration-300 transform rounded-lg dark:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
            href="#"
          >
            <RiAdvertisementFill />
            <span className="mx-4 font-medium">Banner Advertise</span>
          </NavLink>
        </nav>
      </div>
    </aside>
  );
};

export default AdminDashboard;
