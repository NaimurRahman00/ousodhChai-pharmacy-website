import { MdDelete, MdOutlineSystemUpdateAlt } from "react-icons/md";

const ManageCategory = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold text-black/70">
          All Medicine Category{" "}
          <span className="text-lg ms-2 px-4 py-0 bg-[#9fe870] rounded-2xl">
            9
          </span>
        </h2>
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
          <span className="text-xl">Add a new category</span>
        </button>
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
                    Category name
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-base font-semibold text-left  text-black"
                  >
                    Update
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5  text-base font-semibold text-left rtl:text-right text-black"
                  >
                    Delete
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
                  <td className="px-12 py-4 text-base font-medium whitespace-nowrap">
                   Headache
                  </td>
                  <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <button className="btn hover:bg-lime-500 inline px-3 text-base font-bold rounded-lg text-black/60 gap-x-2 bg-[#9fe870]">
                    <MdOutlineSystemUpdateAlt className="text-3xl" />
                    </button>
                  </td>
                  <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <button className="btn hover:bg-red-400 inline px-3 text-base font-bold rounded-lg text-black/60 gap-x-2 bg-red-300">
                    <MdDelete className="text-3xl" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCategory;
