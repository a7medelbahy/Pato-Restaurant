import { HomeHeaderData } from "../../../data";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HomeHeaderBox from "./HomeHeaderBox";

const HomeHeader = () => {
  return (
    <div className="home-header">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {HomeHeaderData.map((headerBox) => {
          return (
            <SwiperSlide key={headerBox.id}>
              <HomeHeaderBox headerBox={headerBox} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeHeader;
