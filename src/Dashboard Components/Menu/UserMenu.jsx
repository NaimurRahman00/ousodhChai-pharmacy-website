import { FaHistory } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { Link } from "react-router-dom";

const UserMenu = () => {
  return (
    <nav>
      <Link
        to="userHome"
        className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
      >
        <GoHomeFill />
        <span className="mx-4 font-medium">Home</span>
      </Link>
      <Link
        to="dashboardHome"
        className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
      >
        <FaHistory />
        <span className="mx-4 font-medium">Payment History</span>
      </Link>
      
    </nav>
  );
};

export default UserMenu;
