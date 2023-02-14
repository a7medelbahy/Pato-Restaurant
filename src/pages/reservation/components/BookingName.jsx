const BookingName = () => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="booking-name">
        <label htmlFor="exampleInputName" className="form-label">
          Name
        </label>
        <input
          type="text"
          placeholder="Full-Name"
          className="form-control"
          id="exampleInputName"
        />
      </div>
    </div>
  );
};

export default BookingName;
