

const ManageMedicines = () => {
    return (
        <div className="p-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold text-black/70">
            My Medicines{" "}
            <span className="text-lg ms-2 px-4 py-0 bg-[#9fe870] rounded-2xl">
              9
            </span>
          </h2>
          <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-black shadow shadow-black/90 duration-200 bg-[#9fe870] rounded-lg shrink-0 sm:w-auto gap-x-2 active:scale-95 active:bg-[#86c65f] transition-all">
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
            <span className="text-xl">Add a new Medicine</span>
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
                      Medicine name
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-base font-semibold text-left text-black"
                    >
                      Category name
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-base font-semibold text-left text-black"
                    >
                      Company Name
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-base font-semibold text-left text-black"
                    >
                      Discount 
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5  text-base font-semibold text-left rtl:text-right text-black"
                    >
                      Mass Unit (Mg/Ml)
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-base font-semibold text-left  text-black"
                    >
                      Price (per Unit)
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
                     Napa
                    </td>
                    <td className="px-12 py-4 text-base font-medium whitespace-nowrap">
                     Napa
                    </td>
                    <td className="px-12 py-4 text-base font-medium whitespace-nowrap">
                     Napa
                    </td>
                    <td className="px-12 py-4 text-base font-medium whitespace-nowrap">
                     Napa
                    </td>
                    <td className="px-12 py-4 text-base font-medium whitespace-nowrap">
                     Napa
                    </td>
                    <td className="px-12 py-4 text-base font-medium whitespace-nowrap">
                     Napa
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

export default ManageMedicines;