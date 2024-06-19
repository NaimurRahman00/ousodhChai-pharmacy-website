import { MdDelete, MdLocationPin } from "react-icons/md";
import Container from "../../components/Shared/Container";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSolidCoupon } from "react-icons/bi";
import axios from "axios";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Cart = () => {
  // Getting cart data using TanStack queries
  const {
    data: cart = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => getData(),
  });

  // getting cart data using axios
  const getData = async () => {
    const data = await axios(`${import.meta.env.VITE_API_URL}/cart`);
    return data.data;
  };

  // Delete a data using tanstack query
  const handleDelete = async (id) => {
    try {
      mutate(id);
      console.log(id);
    } catch (err) {
      console.log(err);
    }
  };

  // Delete all data using tanstack query
  const { mutate } = useMutation({
    mutationFn: async (id) => {
      await axios.delete(`${import.meta.env.VITE_API_URL}/cart/${id}`);
    },
    onSuccess: () => {
      refetch();
    },
  });

  // Delete all cart data
  const deleteAllData = async () => {
    const response = await axios.delete(
      `${import.meta.env.VITE_API_URL}/cart/deleteAll`
    );
    return response.data;
  };

  const handleDeleteAll = () => {
    try {
      deleteAllData();
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-3 md:px-10 mt-2">
        <div className="col-span-1 md:col-span-2">
          <div className="flex justify-between items-center px-6 py-3 border border-black/10 rounded-2xl bg-[#f4f4f5]">
            <h2 className="text-xl font-semibold">
              My Cart{" "}
              <span className="text-sm font-bold px-3 py-0.5 bg-[#9fe870] rounded-full ml-2">
                {cart?.length}
              </span>
            </h2>
            <div className="flex items-center gap-2">
              <h2
                onClick={handleDeleteAll}
                className="text-lg font-semibold text-black/70 shadow-sm shadow-[#343434] px-4 py-0.5 rounded-lg bg-red-300 active:scale-95 cursor-pointer"
              >
                Remove all
              </h2>
            </div>
          </div>

          {/* Loading indicator */}
          {isLoading ? (
            <div className="min-h-[80vh] flex justify-center items-center text-4xl font-semibold">
              <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-green-400"></div>
            </div>
          ) : (
            <div className="mt-6 flex flex-col gap-4">
              {cart?.map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-3 gap-5 rounded-3xl border p-6 bg-[#f4f4f5]"
                >
                  <div className="flex flex-col col-span-1">
                    <div>
                      <h1 className="text-2xl font-bold text-black/70">
                        {item?.medicine_name}
                      </h1>
                      <p className="text-sm font-semibold text-black/40">
                        {item?.medicine_category}
                      </p>
                    </div>
                    <div className="flex justify-center items-center mt-10">
                      <img src={item?.image} alt="" className="w-3/5" />
                    </div>
                  </div>
                  <div className="col-span-2 flex flex-col justify-end">
                    <h2 className="font-semibold text-xl text-black/70 underline mb-4">
                      Description
                    </h2>
                    <p>{item?.short_description}</p>
                    <p className="px-4 py-1 bg-[#9fe870] text-black/60 font-bold mt-4 rounded-xl w-fit ">
                      {item?.mass_unit}
                    </p>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mt-4 md:mt-6">
                      <h2 className="text-3xl font-semibold mb-3 md:mb-0">
                        {item?.price || "$12.00"}
                      </h2>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            handleDelete(item?._id);
                          }}
                          className="btn text-2xl bg-[#9ee87063] hover:bg-[#9ee870]"
                        >
                          <MdDelete />
                        </button>
                        <div className="join">
                          <button className="btn join-item text-3xl bg-[#9fe870] hover:bg-[#79c44a]">
                            -
                          </button>
                          <h2 className="join-item text-2xl hover:bg-transparent px-6 py-2">
                            1
                          </h2>
                          <button className="btn join-item text-3xl bg-[#9fe870] hover:bg-[#79c44a]">
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col-span-1 border border-black/10 bg-[#f4f4f5] rounded-3xl">
          <div className="p-6">
            <h2 className="text-xl font-bold text-black/70 mb-3">
              Order summary
            </h2>
            {cart?.map((item, i) => (
              <div key={i} className="flex justify-between items-center ">
                <p className="text-base text-black/55 font-semibold">
                  <span className="mr-2">x1</span> {item?.medicine_name}
                </p>
                <p className="text-lg font-bold text-black/60">
                  {item?.price || item?.discounted_price || "$12.00"}
                </p>
              </div>
            ))}
          </div>
          <hr />
          <div className="p-6 space-y-1">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-base text-black/55 font-semibold">
                Delivery charge
              </h2>
              <h2 className="text-lg font-bold text-black/60">$10.00</h2>
            </div>
            <div className="flex gap-2 items-center text-base font-bold text-black/70">
              <TbTruckDelivery /> Pathao Express
            </div>
            <div className="flex gap-2 items-center">
              <MdLocationPin /> Deliver to{" "}
              <span className="text-base font-bold text-black/70">
                Shariatpur, Dhaka
              </span>
            </div>
          </div>

          <hr />
          <div className="p-6">
            <h2 className="flex justify-between items-center">
              <span className="text-base text-black/55 font-semibold">
                Amount
              </span>{" "}
              <span className="text-lg font-bold text-black/60">{}</span>
            </h2>
            <h2 className="flex justify-between items-center">
              <span className="text-base text-black/55 font-semibold">Tax</span>{" "}
              <span className="text-lg font-bold text-black/60">$5.00</span>
            </h2>
          </div>
          <hr />
          <div className="flex justify-between items-center p-6">
            <h2 className="text-lg font-bold text-black/70">Order total</h2>
            <h2 className="text-lg font-bold text-black/60">$109.99</h2>
          </div>
          <hr />
          <div className="p-6">
            <label className="input flex items-center gap-2 bg-white rounded-xl w-full overflow-hidden border border-black/20">
              <div className="bg-[#9fe870] -ml-3 p-2.5 font-thin rounded-lg m-1 cursor-pointer">
                <BiSolidCoupon className="text-xl" />
              </div>
              <input
                type="text"
                className="grow outline-none pr-4"
                placeholder="Add coupon code here"
              />
            </label>
            <Link to="/checkout">
              <button className="btn bg-gradient-to-tr to-lime-300 from-[#9fe870] text-2xl w-full mt-2 hover:bg-[#60a436]">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
