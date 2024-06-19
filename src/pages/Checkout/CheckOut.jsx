import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BiSolidCoupon } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
// import { Link } from "react-router-dom";

const CheckOut = () => {
	  // Getting data using TanStack queries
		const {
			data: cart = [],
			isLoading,
			refetch,
		} = useQuery({
			queryKey: ["cart"],
			queryFn: async () => getData(),
		});
	
		// getting all product data using axios
		const getData = async () => {
			const data = await axios(`${import.meta.env.VITE_API_URL}/cart`);
			return data.data;
		};
  return (
    <main className="px-4 sm:px-6 lg:px-8-mt-8">
      <div className="relative grid gap-8 lg:grid-cols-3 rounded-xl md:p-10">
        {/* left side */}
        <div className="flex md:flex-col md:justify-between gap-8 col-span-2">
          <div className="rounded-3xl border border-black/10 bg-card text-card-foreground shadow-sm bg-[#f1f5f9]">
            <div className="flex flex-col space-y-1.5 lg:p-6 p-2">
              <h3 className="text-3xl font-semibold whitespace-nowrap">
                Shipping Details
              </h3>
            </div>
            <div className="lg:p-6 p-2">
              {/* Shipping Details form */}
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <input
                    className="bg-transparent flex h-10 w-full rounded-md border px-3"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Address</label>
                  <input
                    className="bg-transparent flex h-10 w-full rounded-md border px-3"
                    placeholder="Enter your address"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">City</label>
                  <input
                    className="bg-transparent flex h-10 w-full rounded-md border px-3"
                    placeholder="Enter your city"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Country</label>
                  <input
                    className="bg-transparent flex h-10 w-full rounded-md border px-3"
                    placeholder="Enter your country"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="rounded-2xl border border-black/10 bg-card shadow-sm bg-[#f1f5f9]">
            <div className="flex flex-col space-y-1.5 lg:p-6 p-2">
              <h3 className="text-2xl font-semibold whitespace-nowrap">
                Payment Information
              </h3>
            </div>
            <div className="lg:p-6 p-2">
              {/* Personal Information details form */}
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">
                    Card Number
                  </label>
                  <input
                    className="bg-transparent flex h-10 w-full rounded-md border px-3"
                    placeholder="Enter your card number"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">
                      Expiry Date
                    </label>
                    <input
                      className="bg-transparent flex h-10 w-full rounded-md border px-3"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">
                      CVV
                    </label>
                    <input
                      className="bg-transparent flex h-10 w-full rounded-md border px-3"
                      placeholder="Enter your CVV"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium leading-none">
                    Billing Address
                  </label>
                  <input
                    className="bg-transparent flex h-10 w-full rounded-md border px-3"
                    placeholder="Enter your billing address"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="h-full bg-[#f1f5f9] border border-black/10 rounded-3xl col-span-1 relative">
          <div className="sticky top-24">
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
                <span className="text-base text-black/55 font-semibold">
                  Tax
                </span>{" "}
                <span className="text-lg font-bold text-black/60">$5.00</span>
              </h2>
            </div>
            <hr />
            <div className="flex justify-between items-center p-6">
              <h2 className="text-lg font-bold text-black/70">Order total</h2>
              <h2 className="text-lg font-bold text-black/60">$109.99</h2>
            </div>
            <div className="p-6">
              {/* <Link to="/checkout"> */}
                <button className="btn bg-gradient-to-tr from-lime-300 to-[#9fe870] text-2xl w-full mt-2 hover:bg-[#60a436]">
                  Purchase
                </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckOut;
