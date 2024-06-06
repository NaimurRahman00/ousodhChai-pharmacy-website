import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaUsersCog } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdOutlinePayment } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
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
  );
};

export default AdminMenu;
