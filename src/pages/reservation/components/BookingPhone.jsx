const BookingPhone = () => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="booking-phone">
        <label htmlFor="exampleInputPhone" className="form-label">
          Phone
        </label>
        <input
          type="tel"
          placeholder="Phone Number"
          className="form-control"
          id="exampleInputPhone"
        />
      </div>
    </div>
  );
};

export default BookingPhone;
