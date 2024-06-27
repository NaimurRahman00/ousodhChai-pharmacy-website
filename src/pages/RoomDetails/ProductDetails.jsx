import { FaFire, FaRegHeart } from "react-icons/fa6";
import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";
import Rating from "../../components/Mini/Rating";
import { RiHome2Line } from "react-icons/ri";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

// Loader component
const Loader = () => (
  <div className="min-h-[80vh] flex justify-center items-center text-4xl font-semibold">
    <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-green-400"></div>
  </div>
);

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  // Retrieve quantity from local storage on mount
  useEffect(() => {
    const savedQuantity = localStorage.getItem(`quantity-${id}`);
    if (savedQuantity) {
      setQuantity(parseInt(savedQuantity, 10));
    }
  }, [id]);

  // Save quantity to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem(`quantity-${id}`, quantity);
  }, [quantity, id]);

  // Getting data using TanStack queries
  const {
    data: details = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["detailss"],
    queryFn: async () => getData(),
  });

  // getting all product data using axios
  const getData = async () => {
    const data = await axios(
      `${import.meta.env.VITE_API_URL}/discountedMedicines/${id}`
    );
    const data2 = await axios(
      `${import.meta.env.VITE_API_URL}/trendingMedicines/${id}`
    );
    const data3 = await axios(`${import.meta.env.VITE_API_URL}/babyFood/${id}`);
    return data.data || data2.data || data3.data;
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  // Add to cart
  const handleAddToCart = async () => {
    try {
      // add to cart products
      await axios.post(`${import.meta.env.VITE_API_URL}/cart`, {
        ...details,
        quantity: quantity,
      });
      refetch();
      toast.success("Item added to the cart");
    } catch {
      console.log("err");
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container>
      <Helmet>
        <title>OushodhChai | Details</title>
      </Helmet>
      <motion.div
        className="bg-gradient-to-b from-[#e4e4e4] rounded-t-[3rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row md:gap-4">
          <motion.div
            className="relative flex-1 flex items-center justify-center rounded-xl py-10"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={details?.image}
              alt=""
              className="w-[15rem] md:w-[30rem]"
            />
            <div className="absolute top-10 left-10 text-2xl hover:text-red-500 cursor-pointer">
              <FaRegHeart />
            </div>
          </motion.div>
          <motion.div
            className="flex-1 rounded-xl px-6 md:px-0 md:py-10"
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg font-bold text-black/70">
              {details?.generic_name}
            </p>
            <h2 className="text-2xl font-bold text-black/80">
              {details?.medicine_name}
            </h2>
            <h2 className="text-base font-medium text-black/50">
              {details?.company_name}
            </h2>
            <h2 className="mt-4 md:mt-10">
              <span className="text-4xl font-bold text-black/85">
                ${details?.discounted_price || details?.price || 20}
              </span>{" "}
              <del className="text-black/40 font-semibold text-lg ms-2">
                ${details?.previous_price}.00
              </del>
            </h2>
            <div className="flex flex-col md:flex-row gap-2 md:gap-6 md:items-center mt-4">
              <Rating></Rating>
              <p>{details?.rating} | 7 Reviews</p>
              <p className="underline text-blue-400 hover:text-blue-600 md:ms-3">
                Write a review
              </p>
            </div>
            <h4 className="underline text-blue-400 hover:text-blue-600 mt-3">
              Check Stores availability
            </h4>
            <div className="flex items-center gap-4 py-2 md:py-4 px-4 md:px-6 my-4 bg-[#9fe870] md:w-[29rem] rounded-2xl font-bold text-black/90 md:text-xl">
              <RiHome2Line className="text-2xl text-black/90" />
              <h2>Home delivery within 2 Hours</h2>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <div className="join">
                <button
                  onClick={handleDecrement}
                  className="btn join-item text-3xl bg-[#9fe870] hover:bg-[#79c44a] flex-1"
                >
                  -
                </button>
                <h2 className="join-item text-2xl hover:bg-transparent px-6 py-2 flex-1 text-center">
                  {quantity}
                </h2>
                <button
                  onClick={handleIncrement}
                  className="btn join-item text-3xl bg-[#9fe870] hover:bg-[#79c44a] flex-1"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="btn bg-[#9fe870] hover:bg-[#79c44a] text-xl font-semibold md:ml-4"
              >
                Add to Cart
              </button>

              <button
                onClick={() => {
                  handleAddToCart();
                  navigate("/checkout", { state: { refresh: true } });
                }}
                className="btn bg-[#9fe870] hover:bg-[#79c44a] text-xl font-semibold"
              >
                Buy Now
              </button>
            </div>
            <div className="flex items-center gap-4 border border-[#5f9a3b] rounded-xl px-2 md:px-6 py-2 md:py-4 my-4 md:text-xl font-medium w-fit">
              <FaFire className="text-orange-600 text-2xl" />
              <h3>Running fast! 100+ sold in the last 7 days</h3>
            </div>
          </motion.div>
        </div>
        <div>
          <Tabs>
            <TabList>
              <div className="w-full flex bg-[#f4f4f5]">
                <Tab className="flex-1 py-2 text-center text-xl ">Details</Tab>
                <Tab className="flex-1 py-2 text-center text-xl">
                  Specifications
                </Tab>
                <Tab className="flex-1 py-2 text-center text-xl">Reviews</Tab>
              </div>
            </TabList>

            <TabPanel className="px-5 md:px-20">
              <motion.h2
                className="text-black/70 font-bold text-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Product Description
              </motion.h2>
              <motion.ul
                className="list-disc px-10 space-y-1 mt-2 mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <li>
                  Nourishing and intensively rehydrating care for a better
                  compliance of ultra-drying treatments.
                </li>
                <li>
                  Sébium Hydra is specifically formulated to biologically
                  counteract temporary side effects of dermatological treatments
                </li>
              </motion.ul>
              <Link className="text-lg font-bold underline text-blue-400">
                Read more
              </Link>
            </TabPanel>
            <TabPanel className="px-5 md:px-20">
              <motion.ul
                className="list-disc px-16 space-y-2 pt-4 mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <li>Manufacturer: 207868</li>
                <li>Product form: 155791</li>
                <li>Product function: 162248</li>
              </motion.ul>
            </TabPanel>
            <TabPanel className="px-5 md:px-20 py-4">
              <motion.div
                className="flex justify-between items-center mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-bold text-3xl text-blue-400">Reviews</h2>
                <button className="text-xl font-bold btn bg-blue-500 text-white rounded-xl hover:bg-blue-700">
                  Write a review
                </button>
              </motion.div>
              <motion.div
                className="flex items-center gap-2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                    checked
                  />
                </div>
                <h2 className="font-bold text-lg text-black/70">
                  Naimur .{" "}
                  <span className="text-xs font-normal">1 day ago</span>
                </h2>
              </motion.div>
              <div>
                <h2 className="font-medium text-3xl my-3">
                  I like their Service
                </h2>
                <p>
                  I love the Product. Great for acne prone skin, dried out from
                  acne treatments. Replenishes moisture.However, I wish they
                  would improve their containers. The plastic is too rigid to
                  squeeze out the moisturizer, even when there is a lot left. I
                  have to cut open the bottle to get to the moisturizer but then
                  it just dries out more quickly. Such a waste of product. I've
                  been using it for years, but I'm thinking of switching because
                  of this issue.
                </p>
              </div>
              <motion.div
                className="flex items-center gap-2 mt-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                    checked
                  />
                </div>
                <h2 className="font-bold  text-lg text-black/70">
                  Zubaer .{" "}
                  <span className="text-xs font-normal">1 Week ago</span>
                </h2>
              </motion.div>
              <div>
                <h2 className="font-medium text-3xl my-3">
                  Super fast delivery
                </h2>
                <p>
                  Great for acne prone skin, dried out from acne treatments.
                  Replenishes moisture.However, I wish they would improve their
                  containers. The plastic is too rigid to squeeze out the
                  moisturizer, even when there is a lot left. I have to cut open
                  the bottle to get to the moisturizer but then it just dries
                  out more quickly. Such a waste of product.
                </p>
              </div>
              <motion.div
                className="flex items-center gap-2 mt-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star bg-orange-500"
                    checked
                  />
                </div>
                <h2 className="font-bold text-lg text-black/70">
                  Tasfiqur .{" "}
                  <span className="text-xs font-normal">2 week ago</span>
                </h2>
              </motion.div>
              <div>
                <h2 className="font-medium text-3xl my-3">
                  OushodhChai is best
                </h2>
                <p>
                  Replenishes moisture.However, I wish they would improve their
                  containers. The plastic is too rigid to squeeze out the
                  moisturizer, even when there is a lot left.
                </p>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </motion.div>
    </Container>
  );
};

export default ProductDetails;
