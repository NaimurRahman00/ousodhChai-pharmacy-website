import { MdOutlineFileDownload } from "react-icons/md";

const PaymentHistory = () => {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold text-black/70">
          Total payment in this month
          <span className="text-lg ms-2 px-4 py-0 bg-gradient-to-tr from-[#9fe870] to-[#8bd95b38]  rounded-2xl">
            12
          </span>
        </h2>
        <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-black shadow shadow-black/70 duration-200 bg-gradient-to-tr from-[#9fe870] to-[#8cd95b]  rounded-lg shrink-0 sm:w-auto gap-x-2 active:scale-95 transition-all">
          <MdOutlineFileDownload className="text-2xl" />
          <span className="text-xl">Download payment report</span>
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
                    Product Name
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 px-4 text-base font-semibold text-left rtl:text-right text-black"
                  >
                    User Name
                  </th>
                  <th
                    scope="col"
                    className="px-12 py-3.5 text-base font-semibold text-left text-black"
                  >
                    Payment
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 text-base font-semibold text-left text-black"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-4 py-4 text-base font-medium whitespace-nowrap">
                    Paracitamol
                  </td>
                  <td className="px-4 py-4 text-base font-medium whitespace-nowrap">
                    Mahfuz khan
                  </td>
                  <td className="px-12 py-4 text-base font-semibold whitespace-nowrap">
                    $99.60
                  </td>
                  <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <div className="inline px-3 py-1 text-base font-bold rounded-full text-white gap-x-2 bg-[#5ba5da]">
                      Pending
                    </div>
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

export default PaymentHistory;
