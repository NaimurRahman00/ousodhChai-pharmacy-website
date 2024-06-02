import Container from "../Shared/Container";
import Card from "../Home/Card";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const TrendingProducts = () => {
  const products = [1, 2, 3, 4];
  return (
    <Container>
      <div className="mx-3 md:mx-20 py-10 md:py-24">
        <div className="flex justify-between items-center mb-4 md:mb-16 ">
          <h1 className="text-[#252b61] text-3xl md:text-5xl font-extrabold text-center md:text-start">
            Trending products <br /> for you!
          </h1>
          <Link>
            <h2 className="flex items-center gap-3 uppercase px-4 py-2 rounded-xl text-black/70 font-bold text-xl border border-white hover:border hover:border-[#252b61]">
              See All Products<FaArrowRightLong />
            </h2>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index}></Card>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {products.map((product, index) => (
            <Card key={index}></Card>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TrendingProducts;
