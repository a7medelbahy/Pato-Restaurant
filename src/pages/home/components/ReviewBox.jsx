const ReviewBox = (props) => {
  return (
    <div
      id={props.reviewBox.id}
      className="review-box p-5 text-center gap-4 d-flex flex-column justify-content-center align-items-center"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
    >
      <div className="review-img rounded-circle overflow-hidden">
        <img
          src={props.reviewBox.img}
          className="img-fluid d-block rounded-circle"
          alt="review"
        />
      </div>
      <div className="review-desc">
        <q className="seconday-font fw-bold">{props.reviewBox.review}</q>
      </div>
      <div className="review-info">
        <div className="star-rating">
          {[...Array(5)].map((star, index) => {
            return <span key={index} className="star secondary-font fs-4">&#9733;</span>;
          })}
        </div>

        <p className="secondary-font">{props.reviewBox.info}</p>
      </div>
    </div>
  );
};

export default ReviewBox;
