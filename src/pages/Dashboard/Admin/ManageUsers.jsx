import { CiSearch } from "react-icons/ci";

const ManageUsers = () => {
  return (
    <div>
      <div className="container p-8 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-x-3">
              <h2 className="text-2xl font-medium text-gray-800">Customers</h2>
              <span className="px-3 py-1 text-sm text-black bg-[#9fe870] rounded-full">
                19 Sellers & User
              </span>
            </div>
          </div>
          <div className="flex items-center mt-4 gap-x-3">
            <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border-2 shadow-sm shadow-black/70 rounded-lg gap-x-2 sm:w-auto">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3098_154395)">
                  <path
                    d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832"
                    stroke="currentColor"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3098_154395">
                    <rect width={20} height={20} fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>Import</span>
            </button>
            <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-black shadow shadow-black/90 transition-colors duration-200 bg-[#9fe870] rounded-lg shrink-0 sm:w-auto gap-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Add vendor</span>
            </button>
          </div>
        </div>
        <div className="mt-6 md:flex md:items-center md:justify-between">
          <div className="inline-flex overflow-hidden bg-white border border-black/60 divide-x divide-black rounded-lg">
            <button className="px-5 py-2 text-xs font-medium text-gray-600 bg-[#9fe870] transition-colors duration-200 sm:text-sm hover:bg-[#7dcd4c]">
              Admin
            </button>
            <button className="px-5 py-2 text-xs font-medium text-gray-600 bg-[#9fe870] transition-colors duration-200 sm:text-sm hover:bg-[#7dcd4c]">
              Seller
            </button>
            <button className="px-5 py-2 text-xs font-medium text-gray-600 bg-[#9fe870] transition-colors duration-200 sm:text-sm hover:bg-[#7dcd4c]">
              User
            </button>
          </div>
          <div className="relative flex items-center mt-4 md:mt-0">
            <label className="input hidden md:flex items-center gap-2 rounded-xl w-full overflow-hidden border-2 border-[#9fe870] bg-[#f1f5f9] py-0">
              <div className="bg-[#9fe870] -ml-3 p-2 font-thin rounded-md m-1 cursor-pointer">
                <CiSearch className="text-xl" />
              </div>
              <input
                type="text"
                className="grow outline-none pr-4"
                placeholder="Username"
              />
            </label>
          </div>
        </div>
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mt-4">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border-2 border-[#9fe870] md:rounded-2xl">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#f1f5f9]">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-base font-semibold text-left rtl:text-right text-black"
                    >
                      <button className="flex items-center gap-x-3 focus:outline-none">
                        <span>photo</span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-base font-semibold text-left text-black"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-base font-semibold text-left  text-black"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5  text-base font-semibold text-left rtl:text-right text-black"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5  text-base font-semibold text-left rtl:text-right text-black"
                    >
                      Change status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                      <img
                        className="object-cover size-14 -mx-1 rounded-md dark:border-gray-700 shrink-0"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                        alt=""
                      />
                    </td>
                    <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                      Naimur
                    </td>
                    <td className="px-4 py-4 text-md font-medium text-black/70 whitespace-nowrap">
                      aminaim4u@gmail.com
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="inline px-3 py-1 text-sm font-bold rounded-full text-black/60 gap-x-2 bg-[#9fe870]">
                        Seller
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <button className="p-2 text-black text-xl transition-colors duration-200 rounded-lg">
                        <select className="select select-bordered select-sm w-fit max-w-xs bg-[#9fe870] shadow-sm shadow-black/50">
                          <option disabled selected>
                            Change status
                          </option>
                          <option>Admin</option>
                          <option>Seller</option>
                          <option>User</option>
                        </select>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
          <div className="text-md text-gray-700">
            Page{" "}
            <span className="font-medium text-gray-700">
              1 of 10
            </span>
          </div>
          <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
            <a
              href="#"
              className="flex items-center justify-center w-1/2 px-5 py-2 text-base font-semibold text-gray-700 capitalize transition-colors duration-200 bg-[#9fe870] rounded-md sm:w-auto gap-x-2 hover:bg-[#69ac3f]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:-scale-x-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              <span>previous</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-1/2 px-5 py-2 text-base font-semibold text-gray-700 capitalize transition-colors duration-200 bg-[#9fe870] rounded-md sm:w-auto gap-x-2 hover:bg-[#69ac3f]"
            >
              <span>Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:-scale-x-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
