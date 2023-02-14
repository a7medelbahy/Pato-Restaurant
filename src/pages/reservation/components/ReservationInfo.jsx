import ReserveImg from "../../../images/blog-13.jpg";

const ReservationInfo = () => {
  return (
    <div className="reservation-info section-padding">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-md-6">
            <div
              className="content text-center text-md-start d-flex flex-column gap-4"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div className="content-phone">
                <h4 className="main-font">RESERVE BY PHONE</h4>
                <p className="secondary-font">
                  Donec quis euismod purus. Donec feugiat ligula rhoncus, varius
                  nisl sed, tincidunt lectus. Nulla vulputate , lectus vel
                  volutpat efficitur, orci lacus sodales sem, sit amet quam:{" "}
                  <span>+2 01207933578</span>
                </p>
              </div>
              <div className="content-event">
                <h4 className="main-font">FOR EVENT BOOKING</h4>
                <p className="secondary-font">
                  Donec feugiat ligula rhoncus: <span>+2 01207933578</span> ,
                  varius nisl sed, tinci-dunt lectus sodales sem.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5 offset-lg-1">
            <div
              className="rounded overflow-hidden reserve-img"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={ReserveImg}
                className="img-fluid d-block w-100"
                alt="reservation"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationInfo;
