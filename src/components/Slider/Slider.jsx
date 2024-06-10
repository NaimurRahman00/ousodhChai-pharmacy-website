import { Swiper, SwiperSlide } from "swiper/react";
import { FaBox } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
const banner = [1, 2, 3, 4, 5];

const Slider = () => {
  return (
    <div className="md:mt-4 mx-1 md:mx-6 py-10 bg-[#9fe870] rounded-t-xl md:rounded-t-[2.5rem]">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper bg-[#9fe870] rounded-t-xl md:rounded-t-[2.5rem]"
      >
        <div className="">
          {banner.map((slider, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#9fe870] h-[45rem] md:h-[39rem]">
                <div className="flex justify-center items-start md:-mt-10 mb-10">
                  <h1 className="text-6xl md:text-[18rem] font-bold text-[#163300]">
                    Pharmacy
                  </h1>
                </div>
                <div className="flex flex-col md:grid grid-cols-2 gap-2 px-6 md:px-[5.5rem]">
                  {/* left */}
                  <div className="flex flex-col justify-between h-60">
                    <p className="text-[#163300] uppercase font-semibold md:text-lg">
                      Online Medicine delivery is the process of ordering
                      medications through a website or app and having them
                      delivered to your doorstep.
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
                  <div className="md:relative flex justify-center items-center">
                    <img
                      src="https://i.ibb.co/3kkFkG0/Screenshot-2024-06-09-231446-removebg-preview.png"
                      alt=""
                      className="absolute bottom-0 md:-bottom-16 md:-mt-32"
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
