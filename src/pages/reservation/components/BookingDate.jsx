const BookingDate = () => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="booking-date">
        <label htmlFor="exampleInputDate" className="form-label">
          Date
        </label>
        <input type="date" className="form-control" id="exampleInputDate" />
      </div>
    </div>
  );
};

export default BookingDate;
