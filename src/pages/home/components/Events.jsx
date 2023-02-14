import MainHeading from "./../../../components/MainHeading";
import { EventsBoxData } from "../../../data";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import EventBox from "./EventBox";

const Events = () => {
  return (
    <div className="events section-padding">
      <div className="container">
        <MainHeading sub="Upcomming" main="EVENTS" />
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {EventsBoxData.map((eventBox) => {
            return (
              <SwiperSlide key={eventBox.id}>
                <EventBox eventBox={eventBox} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Events;
