import { CiSearch } from "react-icons/ci";
import Container from "../../components/Shared/Container";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";

const Shop = () => {
  return (
    <Container>
      <section className="p-8 mx-auto rounded-[2rem] flex flex-col">
        <div className="mt-6 md:flex md:items-center md:justify-between">
          <div className="inline-flex overflow-hidden border-2 bg-[#f1f5f9] divide-x rounded-3xl rtl:flex-row-reverse border-[#9fe870] divide-[#9fe870]">
            <h2 className="px-5 py-2 text-xs font-medium bg-[#9fe870] text-gray-800 transition-colors duration-200 sm:text-sm">
              Price:
            </h2>
            <button className="px-5 py-2 text-xs font-medium text-black transition-colors duration-200 sm:text-sm   hover:bg-[#9fe870]">
              Low to High
            </button>
            <button className="px-5 py-2 text-xs font-medium text-black/80 transition-colors duration-200 sm:text-sm hover:bg-[#9fe870]">
              High to Low
            </button>
          </div>

          <div className="ml-6 w-80">
            <label className="input hidden md:flex items-center gap-2 rounded-full w-full overflow-hidden border-2 border-[#9fe870] bg-[#f1f5f9]">
              <div className="bg-[#9fe870] -ml-3.5 p-2.5 font-thin rounded-full m-1 cursor-pointer">
                <CiSearch className="text-xl" />
              </div>
              <input
                type="text"
                className="grow outline-none pr-4"
                placeholder="Medicine/Generic Name"
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col mt-6 flex-1">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border-2 border-[#9fe870] md:rounded-3xl">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-[#f1f5f9]">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-base font-semibold text-left rtl:text-right text-black"
                      >
                        <button className="flex items-center gap-x-3 focus:outline-none">
                          <span>Image</span>
                        </button>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5  text-base font-semibold text-left rtl:text-right text-black"
                      >
                        Medicine name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5  text-base font-semibold text-left rtl:text-right text-black"
                      >
                        Generic name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5  text-base font-semibold text-left rtl:text-right text-black"
                      >
                        Company name
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5  text-base font-semibold text-left rtl:text-right text-black"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5  text-base font-semibold text-left rtl:text-right text-black"
                      >
                        Select
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5  text-base font-semibold text-left rtl:text-right text-black"
                      >
                        Details
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
                        Peracitamol 500mg
                      </td>
                      <td className="px-4 py-4 text-md font-medium text-black/70 whitespace-nowrap">
                        Fever
                      </td>
                      <td className="px-4 py-4 text-base font-medium text-black/70 whitespace-nowrap">
                        Square Ltd.
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="inline px-3 py-1 text-sm font-bold rounded-full text-black/60 gap-x-2 bg-[#9fe870]">
                          $99.50
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <button className="p-2 text-black text-xl transition-colors duration-200 rounded-lg hover:bg-gray-400">
                        <RiShoppingCartLine />
                        </button>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <button className="p-2 text-black text-xl transition-colors duration-200 rounded-lg hover:bg-gray-400">
                        <FaEye />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
      </section>
    </Container>
  );
};

export default Shop;
