import { FaFire, FaRegHeart } from "react-icons/fa6";
import Container from "../../components/Shared/Container";
import { Helmet } from "react-helmet-async";
import Rating from "../../components/Mini/Rating";
import { RiHome2Line } from "react-icons/ri";

const RoomDetails = () => {
  return (
    <Container>
      <Helmet>
        <title>OushodhChai | Details</title>
      </Helmet>
      <div className="flex gap-4 bg-[#f4f4f5] rounded-t-[3rem]">
        <div className="relative flex-1 flex items-center justify-center rounded-xl py-10">
          <img
            src="https://i.ibb.co/WfJbFN3/Screenshot-2024-06-02-202353-removebg-preview.png"
            alt=""
            className="w-[30rem]"
          />
          <div className="absolute top-10 left-10 text-2xl hover:text-red-500 cursor-pointer">
            <FaRegHeart />
          </div>
        </div>
        <div className="flex-1 rounded-xl py-10">
          <p className="text-lg font-bold text-black/70">Product Genre</p>
          <h2 className="text-2xl font-bold text-black/80">Product Name</h2>
          <h2 className="text-base font-medium text-black/50">Company Name</h2>
          <h2 className="mt-10">
            <span className="text-4xl font-bold text-black/85">$99.50</span> <del className="text-black/40 font-semibold text-lg ms-2">$120.99</del>
          </h2>
          <div className="flex gap-6 items-center mt-4">
            <Rating></Rating>
            <p>5.00 | 7 Reviews</p>
            <p className="underline text-blue-400 hover:text-blue-600 ms-3">Write a review</p>
          </div>
          <h4 className="underline text-blue-400 hover:text-blue-600 mt-3">Check Stores availability</h4>
          <div className="flex items-center gap-4 py-4 px-6 my-4 bg-[#9fe870] md:w-[29rem] rounded-2xl font-bold text-black/90 text-xl">
            <RiHome2Line className="text-2xl text-black/90"/>
            <h2>Home delivery within 2 Hours</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="join">
              <button className="btn join-item text-3xl text-[#77c049] bg-[#9fe870] hover:bg-[#79c44a]">-</button>
              <h2 className="join-item text-2xl hover:bg-transparent px-6 py-2">1</h2>
              <button className="btn join-item text-3xl text-[#77c049] bg-[#9fe870] hover:bg-[#79c44a]">+</button>
            </div>
            <button className="btn bg-[#9fe870] hover:bg-[#79c44a] text-xl font-semibold ml-4">Add to Cart</button>
            <button className="btn bg-[#9fe870] hover:bg-[#79c44a] text-xl font-semibold">Buy Now</button>
          </div>
          <div className="flex items-center gap-4 border border-[#5f9a3b] rounded-xl px-6 py-4 my-4 text-xl font-medium w-fit">
            <FaFire className="text-orange-600 text-2xl"/>
            <h3>Running fast! 100+ sold in the last 7 days</h3>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
