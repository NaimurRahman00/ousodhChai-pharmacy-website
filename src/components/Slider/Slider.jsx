import { Swiper, SwiperSlide } from "swiper/react";
import { FaBox } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Slider = () => {
  // Getting slide data using TanStack queries
  const { data: advertise = [], isLoading, isPending } = useQuery({
    queryKey: ["slider"],
    queryFn: async () => getData(),
  });

  // getting all slide data using axios
  const getData = async () => {
    const data = await axios(`${import.meta.env.VITE_API_URL}/slider`);
    return data.data;
  };

  const bgColor = [
    "#9fe870", // existing
    "#dda0dd", // plum
    "#e0ffff", // light cyan
    "#a3d9a5", // soft green
    "#add8e6", // soft blue
    "#ffdead", // navajo white
    "#ffcccb", // coral
    "#ffb6c1", // light pink
    "#d8bfd8", // thistle
    "#ffe4e1", // misty rose
  ];
  
  
  
  

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="">
          {advertise.map((ad, index) => (
            <SwiperSlide key={index}>
              <div
                className={`relative h-[48rem] md:h-[39rem] md:mt-4 mx-1 md:mx-6 py-10 pb-20 rounded-t-xl md:rounded-t-[2.5rem]`}
                style={{ backgroundColor: bgColor[index % bgColor.length] }}
              >
                <div className="flex justify-start items-start md:-mt-10 mb-10 ps-6 md:ps-[4rem]">
                  <h1 className="text-6xl md:text-[18rem] font-bold text-[#163300]">
                    {ad.medicine_name}
                  </h1>
                </div>
                <div className="flex flex-col md:grid grid-cols-2 gap-2 px-6 md:px-[5.5rem]">
                  {/* left */}
                  <div className="flex flex-col justify-between h-60">
                    <p className="text-[#163300] uppercase font-semibold md:text-lg">
                      {ad.short_description}
                    </p>
                    <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-10 mt-5 md:mt-0">
                      <h2 className="flex items-center gap-4 font-semibold text-[#163300] text-xl">
                        <span className="p-2 rounded-full bg-[#163300] text-[#9fe870]">
                          <FaBox />
                        </span>
                        Delivery to your <br /> doorstep
                      </h2>
                      <h2 className="flex items-center gap-4 font-semibold text-[#163300] text-xl">
                        <span className="p-2 rounded-full bg-[#163300] text-[#9fe870]">
                          <GiMedicines />
                        </span>
                        100% Genuine <br /> medicines
                      </h2>
                    </div>
                  </div>
                  {/* Advertise */}
                  <div className="md:relative flex justify-center md:justify-end items-center">
                    <img
                      src={ad.image}
                      alt=""
                      className="absolute bottom-0 md:-bottom-16 md:-mt-32 w-[70%]"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
