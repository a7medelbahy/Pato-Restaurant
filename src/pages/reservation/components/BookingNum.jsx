const BookingNum = () => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="booking-num">
        <label htmlFor="exampleInputNum" className="form-label">
          People
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          id="exampleInputNum"
        >
          <option defaultValue>1 Person</option>
          <option value="1">2 People</option>
          <option value="2">3 People</option>
          <option value="3">4 People</option>
          <option value="3">5 People</option>
          <option value="3">6 People</option>
          <option value="3">7 People</option>
          <option value="3">8 People</option>
          <option value="3">9 People</option>
          <option value="3">10 People</option>
        </select>
      </div>
    </div>
  );
};

export default BookingNum;
