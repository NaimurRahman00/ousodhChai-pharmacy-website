import { GoHomeFill } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { AiFillMedicineBox } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import { RiAdvertisementFill } from "react-icons/ri";

const SellerMenu = () => {
  return (
    <nav>
      <NavLink
        to="sellerHome"
        className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
      >
        <GoHomeFill />
        <span className="mx-4 font-medium">Home</span>
      </NavLink>
      <NavLink
      to="manageMedicine"
        className="flex items-center px-4 py-2 mt-5 text-gray-800 transition-colors duration-300 transform rounded-lg dark:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
      >
        <AiFillMedicineBox />
        <span className="mx-4 font-medium">Manage Medicines</span>
      </NavLink>
      <NavLink
      to="paymentHistory"
        className="flex items-center px-4 py-2 mt-5 text-gray-800 transition-colors duration-300 transform rounded-lg dark:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
      >
        <FaHistory />
        <span className="mx-4 font-medium">Payment History</span>
      </NavLink>
      <NavLink
      to="requestAdvertisement"
        className="flex items-center px-4 py-2 mt-5 text-gray-800 transition-colors duration-300 transform rounded-lg dark:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
      >
        <RiAdvertisementFill />
        <span className="mx-4 font-medium">Advertisement</span>
      </NavLink>
    </nav>
  );
};

export default SellerMenu;
