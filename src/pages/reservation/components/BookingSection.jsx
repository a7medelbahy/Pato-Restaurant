import MainHeading from "./../../../components/MainHeading";
import BookingDate from "./BookingDate";
import BookingMail from "./BookingMail";
import BookingName from "./BookingName";
import BookingNum from "./BookingNum";
import BookingPhone from "./BookingPhone";
import BookingTime from "./BookingTime";

const BookingSection = () => {
  return (
    <div className="booking section-padding section-background">
      <div className="container">
        <MainHeading sub="Reservation" main="BOOK TABLE" />
        <div
          className="row gy-5 align-items-center justify-content-center"
          data-aos="flip-down"
          data-aos-duration="1000"
        >
          <form action="#">
            <div className="row gy-5 mb-5 justify-content-center align-items-center">
              <BookingDate />
              <BookingTime />
              <BookingNum />
            </div>
            <div className="row gy-5 justify-content-center align-items-center">
              <BookingName />
              <BookingPhone />
              <BookingMail />
            </div>
            <button type="submit" className="btn secondary-btn mt-5">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
