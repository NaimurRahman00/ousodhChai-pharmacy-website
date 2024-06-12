import { FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserMenu = () => {
  return (
    <nav>
      <Link
        to="userPaymentHistory"
        className="flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform rounded-lg text-[#9fe870] bg-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
      >
        <FaHistory />
        <span className="mx-4 font-medium">Payment History</span>
      </Link>
      
    </nav>
  );
};

export default UserMenu;
