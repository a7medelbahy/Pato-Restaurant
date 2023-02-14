import "../home.css";
import MainHeading from "./../../../components/MainHeading";
import { ReviewsData } from "../../../data";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ReviewBox from "./ReviewBox";

const HomeReviews = () => {
  return (
    <div className="home-reviews section-padding">
      <div className="container">
        <MainHeading sub="Customers Say" main="REVIEW" />
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {ReviewsData.map((reviewBox) => {
            return (
              <SwiperSlide key={reviewBox.id}>
                <ReviewBox reviewBox={reviewBox} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeReviews;
