import MainHeading from "./../../../components/MainHeading";
import BookingImg from "../../../images/booking-01.jpg";
import { Link } from "react-router-dom";
import ContactBox from "../../../components/ContactBox";

const HomeBooking = () => {
  const toUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  return (
    <div className="home-booking section-padding section-background">
      <div className="container">
        <div className="row gy-5 justify-content-center align-items-center">
          <div className="col-md-7">
            <div
              className="booking-content"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <MainHeading sub="Reservation" main="BOOK TABLE" />
              <div className="row gy-5 justify-content-center align-items-center">
                <div className="col-md-6 text-center text-md-start">
                  <ContactBox
                    icon="fa-clock"
                    title="OPENING HOURS"
                    info1="09:30 AM - 11:00 PM"
                    info2="Every Day"
                  />
                </div>
                <div className="col-md-6 text-center text-md-start">
                  <ContactBox
                    icon="fa-location-dot"
                    title="LOCATION"
                    info1="8th floor, 379 Hudson St,"
                    info2="New York, NY 10018"
                  />
                </div>
              </div>
              <Link
                onClick={toUp}
                to="/reservation"
                className="btn secondary-btn mt-5"
              >
                Book Now
              </Link>
            </div>
          </div>
          <div className="col-md-5">
            <div
              className="booking-img rounded overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={BookingImg}
                className="img-fluid d-block w-100"
                alt="Booking Img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBooking;
