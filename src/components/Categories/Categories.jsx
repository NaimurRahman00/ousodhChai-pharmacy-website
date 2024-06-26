import Container from "../Shared/Container";
import CategoriesCard from "./CategoriesCard.jsx";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Categories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Getting data using TanStack queries
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => getData(),
  });

  // getting all trending products data using axios
  const getData = async () => {
    const data = await axios(`${import.meta.env.VITE_API_URL}/categories`);
    return data.data;
  };
  // const data = [10, 16, 8, 10, 11, 13]
  return (
    <Container>
      <div className="bg-white rounded-t-[2rem] z-30 mt-20 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  transition: { staggerChildren: 0.2, delayChildren: 0.3 },
                }
              : { opacity: 0 }
          }
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="py-6 md:py-20 mx-4 md:px-16 relative flex gap-5 md:gap-6 items-center justify-between overflow-x-auto bg-white rounded-t-[2rem]"
        >
          {categories.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }} // Line 26
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              key={index}
            >
              <CategoriesCard item={item} index={index}></CategoriesCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Container>
  );
};

export default Categories;
