import { MdDelete, MdLocationPin } from "react-icons/md";
import Container from "../../components/Shared/Container";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSolidCoupon } from "react-icons/bi";

const Cart = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 mt-2">
        <div className="col-span-1 md:col-span-2">
          <div className="flex justify-between items-center px-6 py-3 border border-black/10 rounded-2xl bg-[#f4f4f5]">
            <h2 className="text-xl font-semibold">
              My Cart{" "}
              <span className="text-sm font-bold px-3 py-0.5 bg-[#9fe870] rounded-full ml-2">
                3
              </span>
            </h2>
            <select className="select w-fit select-sm max-w-xs border-black/30 text-lg bg-transparent">
              <option disabled selected>
                Filter
              </option>
              <option>High to Low</option>
              <option>Low to High</option>
            </select>
          </div>
          {/* product */}
          <div className="border p-6 mt-6 rounded-3xl bg-[#f4f4f5]">
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col col-span-1">
                <div>
                  <h1 className="text-2xl font-bold text-black/70">
                    Product name
                  </h1>
                  <p className="text-sm font-semibold text-black/40">
                    Product category
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src="https://i.ibb.co/WfJbFN3/Screenshot-2024-06-02-202353-removebg-preview.png"
                    alt=""
                    className="w-full"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <h2 className="font-semibold text-xl text-black/70 underline mb-4">
                  Description
                </h2>
                <p>
                  Cereal refers to a grass cultivated for its edible grain. It’s
                  a staple food worldwide and includes rice, wheat, oats,
                  barley, and maize. These grains are often consumed as
                  breakfast cereals, which come in various forms: flaked, made
                  from cooked corn, wheat, or rice pressed into flakes; puffed,
                  where cooked wheat or rice expands several times its original
                  size; shredded, produced from pressure-cooked wheat squeezed
                  into strands and cut into biscuits; and granular, created from
                  a fermented dough of wheat and malted barley.{" "}
                </p>
                <p className="px-4 py-1 bg-[#9fe870] text-black/60 font-bold mt-4 rounded-xl w-fit ">
                  Size: 100 mg
                </p>
                <div className="flex items-center justify-between mt-6">
                  <h2 className="text-3xl font-semibold">$99.10</h2>
                  <div className="flex items-center gap-2">
                    <button className="btn text-2xl bg-[#9ee87063] hover:bg-[#9ee870]">
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
          </div>
        </div>
        <div className="col-span-1 border border-black/10 bg-[#f4f4f5] rounded-3xl">
          <div className="p-6">
            <h2 className="text-xl font-bold text-black/70">Order summary</h2>
            <div className="flex justify-between items-center mt-3">
              <p className="text-base text-black/55 font-semibold">
                <span>x1</span> Product Name
              </p>
              <p className="text-lg font-bold text-black/60">$99.00</p>
            </div>
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
              <span className="text-lg font-bold text-black/60">$104.99</span>
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
            <label className="input hidden md:flex items-center gap-2 bg-white rounded-xl w-full overflow-hidden border border-black/20">
              <div className="bg-[#9fe870] -ml-3 p-2.5 font-thin rounded-lg m-1 cursor-pointer">
                <BiSolidCoupon className="text-xl" />
              </div>
              <input
                type="text"
                className="grow outline-none pr-4"
                placeholder="Add coupon code here"
              />
            </label>
            <button className="btn bg-[#9fe870] text-2xl w-full mt-2">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
