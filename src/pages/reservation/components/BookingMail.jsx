const BookingMail = () => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="booking-mail">
        <label htmlFor="exampleInputEmail1" className="form-label">
          E-Mail
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="name@example.com"
        />
      </div>
    </div>
  );
};

export default BookingMail;
