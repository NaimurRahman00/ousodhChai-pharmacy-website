import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TrendingProductCard from "./TrendingProductCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Container from "../Shared/Container";

const TrendingProducts = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["trend"],
    queryFn: async () => getData(),
  });

  const getData = async () => {
    const data = await axios(
      `${import.meta.env.VITE_API_URL}/trendingMedicines`
    );
    return data.data;
  };

  // Framer Motion animation controls
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <Container>
      <div className="mx-3 md:mx-20 py-10 md:py-24" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6 }}
          className="md:flex md:justify-between items-center mb-6 md:mb-16"
        >
          <h1 className="text-[#252b61] text-3xl md:text-5xl font-extrabold text-center md:text-start">
            Trending products <br /> for you!
          </h1>
          <Link className="hidden md:flex">
            <motion.h2
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 uppercase px-4 py-2 rounded-xl text-black/70 font-bold text-xl border border-white hover:border hover:border-[#252b61]"
            >
              See All Products
              <FaArrowRightLong />
            </motion.h2>
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TrendingProductCard product={product}></TrendingProductCard>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6 }}
          className="mt-6 flex justify-center items-center md:hidden"
        >
          <Link className="">
            <motion.h2
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 uppercase px-4 py-2 rounded-xl text-white/80 font-semibold text-xl bg-[#252b61] border border-[#252b61] hover:bg-white hover:text-black/85"
            >
              See All Products
              <FaArrowRightLong />
            </motion.h2>
          </Link>
        </motion.div>
      </div>
    </Container>
  );
};

export default TrendingProducts;
