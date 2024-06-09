import Card from "./Card";
import Container from "../Shared/Container";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const DiscountProduct = () => {
  // Getting data using TanStack queries
  const { data: medicines = [], isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => getData(),
  });

  // getting all jobs data using axios
  const getData = async () => {
    const data = await axios(`${import.meta.env.VITE_API_URL}/medicines`);
    return data.data;
  };
  console.log(medicines);

  const isSmallScreen = window.innerWidth <= 600;
  const isMedScreen = window.innerWidth <= 900;

  return (
    <Container>
      <div className="mx-4 md:mx-20 my-12 md:my-0">
        <div>
          <h1 className="text-[#242a60] text-2xl md:text-6xl font-bold mb-4 md:mb-16 text-center md:text-start">
            Todays best deals <br /> for you!
          </h1>
        </div>
        <div className="">
          <Swiper
            slidesPerView={isSmallScreen ? 1 : isMedScreen ? 3 : 4}
            spaceBetween={10}
            mousewheel={isSmallScreen ? false : true}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="mySwiper cursor-pointer bg-transparent"
          >
            {medicines.map((medicine, inx) => (
              <SwiperSlide
                key={inx}
                className="flex justify-between gap-6 px-2 bg-transparent"
              >
                <Card medicine={medicine} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default DiscountProduct;
