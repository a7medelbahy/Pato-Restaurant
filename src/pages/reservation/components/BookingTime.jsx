const BookingTime = () => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="booking-time">
        <label htmlFor="exampleInputTime" className="form-label">
          Time
        </label>
        <input type="time" className="form-control" id="exampleInputTime" />
      </div>
    </div>
  );
};

export default BookingTime;
