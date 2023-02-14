import "./reservation.css";
import PageHeader from "../../components/PageHeader";
import RservationImg from "../../images/intro-01.jpg";
import BookingSection from "./components/BookingSection";
import ReservationInfo from "./components/ReservationInfo";

const Reservation = () => {
  return (
    <div className="reservation">
      <PageHeader HeaderImg={RservationImg} HeaderTitle="RESERVATION" />
      <BookingSection />
      <ReservationInfo />
    </div>
  );
};

export default Reservation;
