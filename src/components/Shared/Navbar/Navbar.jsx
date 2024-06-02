import Container from "../Container";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import avatarImg from "../../../assets/images/placeholder.jpg";
import { IoLanguage } from "react-icons/io5";
import Select from "../../Mini/Select";
import { CiSearch } from "react-icons/ci";
import { RiShoppingCartLine } from "react-icons/ri";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed left-0 right-0 max-w-[2160px] mx-auto z-10">
      <div className="md:py-5 bg-zinc-100 m-1 md:mx-6 md:my-5 rounded-lg md:rounded-3xl">
        <Container>
          <div className="flex flex-row  items-center justify-between gap-3 md:gap-0">
            <div className="flex items-center">
              {/* Logo */}
              <div className="flex items-center gap-2 md:border-r-2 border-black/20 pr-6">
                <Link to="/">
                  <img
                    // className='hidden md:block'
                    src="medicine.png"
                    alt="logo"
                    width="30"
                    height="30"
                    className="w-10"
                  />
                </Link>
                <h2 className="text-green-900 text-2xl md:text-3xl font-bold">
                  Ousodh<span>Chai</span>
                </h2>
              </div>
              <div className="pl-6 flex-col items-end hidden md:flex">
                <h2 className="flex items-center text-base gap-2">
                  <IoLanguage className="text-xl" /> Select Language
                </h2>
                <Select></Select>
              </div>
              <div className="ml-6 w-80">
                <label className="input input-bordered hidden md:flex items-center gap-2 bg-white rounded-full w-full overflow-hidden border border-black/10">
                  <div className="bg-lime-400 p-2.5 font-thin rounded-full m-1 cursor-pointer">
                    <CiSearch className="text-xl" />
                  </div>
                  <input
                    type="text"
                    className="grow outline-none pr-4"
                    placeholder="Medicine and healthcare items"
                  />
                </label>
              </div>
            </div>

            {/* Dropdown Menu */}
            <div className="relative flex gap-10 items-center">
              <ul className="flex gap-10 items-center">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-xl font-medium text-lime-600 hover:text-lime-700"
                        : "text-xl font-medium hover:text-black/70"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/d"
                    className={({ isActive }) =>
                      isActive
                        ? "text-xl font-medium text-lime-600 hover:text-lime-700"
                        : "text-xl font-medium hover:text-black/70"
                    }
                  >
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink className="flex gap-2 items-center text-xl font-medium transition-all">
                    <RiShoppingCartLine className="text-2xl" />
                    Cart
                  </NavLink>
                </li>
              </ul>
              <div className="flex flex-row items-center gap-3">
                {/* Become A Host btn */}
                {/* <div className="hidden md:block">
                  {!user && (
                    <button
                      disabled={!user}
                      className="disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition"
                    >
                      Host your home
                    </button>
                  )}
                </div> */}
                {/* Dropdown btn */}
                {user ? (
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                  >
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                      {/* Avatar */}
                      <img
                        className="rounded-full"
                        referrerPolicy="no-referrer"
                        src={user && user.photoURL ? user.photoURL : avatarImg}
                        alt="profile"
                        height="30"
                        width="30"
                      />
                    </div>
                  </div>
                ) : (
                  <Link className="text-xl font-medium bg-lime-400 px-4 py-2 rounded-2xl hover:scale-105 transition-all">
                    Join Us
                  </Link>
                )}
              </div>
              {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
                  <div className="flex flex-col cursor-pointer">
                    <Link
                      to="/"
                      className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      Home
                    </Link>

                    {user ? (
                      <>
                        <div
                          onClick={logOut}
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                        >
                          Logout
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Login
                        </Link>
                        <Link
                          to="/signup"
                          className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
