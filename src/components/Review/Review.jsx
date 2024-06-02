import { Link } from "react-router-dom";
import Container from "../Shared/Container";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoStarSharp } from "react-icons/io5";

const Review = () => {
  const reviews = [1, 2, 3, 4];
  return (
    <Container>
      <div className="mx-6 md:mx-20 my-24">
        <div className="md:flex md:justify-between items-center mb-6 md:mb-16 ">
          <div className="flex flex-col gap-6">
            <h1 className="text-[#252b61] text-3xl md:text-5xl font-extrabold text-center md:text-start">
              What our Customers say
            </h1>
            <div className="flex items-center gap-6">
              <ul className="flex items-center gap-1 *:p-2 *:bg-[#00b67a] *:text-3xl *:text-white">
                <li>
                  <IoStarSharp />
                </li>
                <li>
                  <IoStarSharp />
                </li>
                <li>
                  <IoStarSharp />
                </li>
                <li>
                  <IoStarSharp />
                </li>
                <li>
                  <IoStarSharp />
                </li>
              </ul>
              <h2 className="flex text-xl font-bold text-black/80">
                460 Reviews on{" "}
                <IoStarSharp className="text-[#00b67a] text-3xl mx-2" />{" "}
                TrustPilot
              </h2>
            </div>
          </div>

          <Link className="hidden md:flex">
            <h2 className="flex items-center gap-3 uppercase px-4 py-2 rounded-xl text-black/70 font-bold text-xl border border-white">
              Swipe right to see more review
              <FaArrowRightLong className="mr-2" />
            </h2>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {reviews.map((review, index) => (
            <div key={index} className="rounded-3xl bg-[#f1f5f9] p-8">
              <h1 className="text-xl text-black/80 font-bold">
                I had a great check-up at medicare Health service
              </h1>
              <p className="text-lg text-black/75 font-normal py-6">
                "I have been patient at your medicare healthcare service for
                over a year now, I must say that I am extremely satisfied with
                the level."
              </p>
              <ul className="flex items-center gap-0.5 *:p-0.5 *:bg-[#00b67a] *:text-base *:text-white mt-6">
                <li>
                  <IoStarSharp />
                </li>
                <li>
                  <IoStarSharp />
                </li>
                <li>
                  <IoStarSharp />
                </li>
                <li>
                  <IoStarSharp />
                </li>
                <li>
                  <IoStarSharp />
                </li>
              </ul>
              <h4 className="text-lg text-black/80 font-bold mt-2">
                Naimur Rahman
              </h4>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Review;
