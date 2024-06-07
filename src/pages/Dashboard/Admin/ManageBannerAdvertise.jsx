const ManageBannerAdvertise = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <div>
          <h1 className="text-3xl font-bold text-black/70 mb-2">All Advertise Request list</h1>
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
                      <span>Medicine Image</span>
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
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-12 py-3.5 text-base font-semibold text-left text-black"
                  >
                    Seller Email
                  </th>
                  <th
                    scope="col"
                    className="px-12 py-3.5 text-base font-semibold text-end text-black text-nowrap "
                  >
                    Add/Remove Slide
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
                    Peracitamol
                  </td>
                  <td className="px-12 py-4 text-base font-medium whitespace-wrap">
                    Some Description Of peracitamol medicine bla bla bla.Some Description Of peracitamol medicine bla bla bla.Some Description Of peracitamol medicine bla bla bla.Some Description Of peracitamol medicine bla bla bla.
                  </td>
                  <td className="px-12 py-4 text-base font-medium whitespace-nowrap">
                    Seller@gmail.com
                  </td>
                  <td className="px-4 py-4 text-sm whitespace-nowrap text-center">
                      <button className="hover:bg-lime-700 transition-all inline px-3 py-1 text-base font-bold rounded-full text-white gap-x-2 bg-lime-500 active:bg-black active:scale-95">
                      Add
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

export default ManageBannerAdvertise;
