import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaEye } from "react-icons/fa6";
import { RiShoppingCartLine } from "react-icons/ri";
import { useParams } from "react-router-dom";

const AllCategoryDataTable = () => {
  const categoryData = useParams();
  // Getting data using TanStack queries
  const { data: category = [], isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => getData(),
  });

  // getting all product data using axios
  const getData = async () => {
    const data = await axios(
      `${import.meta.env.VITE_API_URL}/category/${categoryData?.category}`
    );
    return data.data;
  };
  console.log(category);

  return (
    <div className="p-8">
      <div className="">
        <h2 className="text-3xl font-bold text-black/70">
          {categoryData?.category}
          <span className="text-lg ms-2 px-4 py-0 bg-[#9fe870] rounded-2xl">
            {categoryData?.category.length}
          </span>
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[90%] w-full shadow-md border mx-auto border-gray-100 my-6 overflow-hidden rounded-3xl">
          <thead>
            <tr className="bg-[#9fe870] text-white">
              <th className="py-4 px-6 text-lg text-left border-b">Name</th>
              <th className="py-4 px-6 text-lg text-left border-b">
                Description
              </th>
              <th className="py-4 px-6 text-lg text-left border-b">
                Company Name
              </th>
              <th className="py-4 px-6 text-lg border-b text-center">Price</th>
              <th className="py-4 px-6 text-lg border-b text-end text-nowrap">
                Add to cart
              </th>
              <th className="py-4 px-6 text-lg border-b text-end text-nowrap">
                View details
              </th>
            </tr>
          </thead>
          <tbody>
            {category.map((cat, i) => (
              <tr
                key={i}
                className="hover:bg-gray-50 border-b transition duration-300"
              >
                <td className="py-4 px-4 flex justify-start">
                  {cat?.medicine_name}
                </td>
                <td className="py-4 px-6 border-b text-xl font-medium">
                  {cat?.short_description}
                </td>
                <td className="py-4 px-6 border-b text-lg font-medium">
                  {cat?.company_name}
                </td>
                <td className="py-4 px-6 border-b text-end">
                  <div className="inline px-3 py-1 text-base font-bold rounded-full text-white gap-x-2 bg-[#5ba5da]">
                    {cat?.price}
                  </div>
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap text-center">
                  <button className="p-2 text-black text-xl transition-colors duration-200 rounded-lg hover:bg-gray-400">
                    <RiShoppingCartLine />
                  </button>
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap text-center">
                  <button className="p-2 text-black text-xl transition-colors duration-200 rounded-lg hover:bg-gray-400">
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCategoryDataTable;
