const SalesReport = () => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-black/70 mb-2">
            Sales Report
          </h1>
          <p className="text-lg font-medium text-black/60">
            Here's your sales report details
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <select className="select select-bordered select-sm w-fit max-w-xs shadow-sm shadow-black/50">
            <option disabled selected>
              Filter by
            </option>
            <option>Small Apple</option>
            <option>Small Orange</option>
            <option>Small Tomato</option>
          </select>
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
                      <span>Medicine name</span>
                    </button>
                  </th>
                  <th
                    scope="col"
                    className="px-12 py-3.5 text-base font-semibold text-left text-black"
                  >
                    Seller email
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-base font-semibold text-left  text-black"
                  >
                    Buyer email
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5  text-base font-semibold text-left rtl:text-right text-black"
                  >
                    Total price
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-4 py-4 text-base font-medium whitespace-nowrap">
                    Monocast 10
                  </td>
                  <td className="px-12 py-4 text-base font-medium whitespace-nowrap">
                    seller@gmail.com
                  </td>
                  <td className="px-4 py-4 text-base font-medium whitespace-nowrap">
                    buyer@email.com
                  </td>
                  <td className="px-4 py-4 text-base font-medium whitespace-nowrap">
                    $299.00
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

export default SalesReport;
