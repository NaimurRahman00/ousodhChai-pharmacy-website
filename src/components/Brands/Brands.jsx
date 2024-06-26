import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Container from "../Shared/Container";
import { useEffect } from "react";

const Brands = () => {
  const brands = [
    { logo: "https://i.ibb.co/1s6MGH8/download-removebg-preview-2.png", name: "Brand 1" },
    { logo: "https://i.ibb.co/cQtDXHB/download-removebg-preview-1.png", name: "Brand 2" },
    { logo: "https://i.ibb.co/9Z5GvC6/download-removebg-preview.png", name: "Brand 3" },
    { logo: "https://i.ibb.co/4ZCgV7F/beximco-pharmaceuticals-ltd-600-removebg-preview.png", name: "Brand 4" },
    { logo: "https://i.ibb.co/f13Gb0H/images-removebg-preview.png", name: "Brand 5" },
    { logo: "https://i.ibb.co/s5WHNHx/eskayef-removebg-preview.png", name: "Brand 6" },
    { logo: "https://i.ibb.co/pPsjxmZ/renata-limited-logo-removebg-preview.png", name: "Brand 7" }
  ];

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Container>
      <div className="mx-3 md:mx-20" ref={ref}>
        <div>
          <h1 className="text-[#252b61] text-3xl md:text-5xl font-extrabold mb-4 md:mb-16 text-center md:text-start">
            Featured Brands
          </h1>
        </div>
        <div className="flex gap-4 items-center justify-between overflow-x-auto w-full">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.5 }
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-[#f1f5f9] rounded-full size-20 md:size-40 flex justify-center items-center overflow-hidden">
                <img src={brand?.logo} alt="Brand Logo" width={100} />
              </div>
              <h2 className="text-sm md:text-xl font-bold text-black/70 mt-2">{brand.name}</h2>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Brands;
