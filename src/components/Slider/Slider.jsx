import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
const banner = [1, 2, 3, 4, 5];

const Slider = () => {
  return (
    <div className="md:mt-8 mx-1 md:mx-6 py-10 bg-[#9fe870] rounded-t-xl md:rounded-t-[2.5rem]">
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
              <div className="bg-[#9fe870] h-40 md:h-[35rem]">
                <div className="flex justify-center items-center">
                  <h1 className="text-6xl md:text-[18rem] font-bold text-black/50">
                    Pharmacy
                  </h1>
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
