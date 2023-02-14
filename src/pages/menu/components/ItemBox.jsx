const ItemBox = ({ img, title, desc, price }) => {
  return (
    <div className="col-md-6">
      <div
        className="item-box d-flex flex-wrap gap-4 align-items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="item-img rounded overflow-hidden">
          <img src={img} className="img-fluid d-block" alt="item" />
        </div>
        <div className="item-data">
          <div className="item-info">
            <h5 className="main-font m-0">{title}</h5>
            <small className="secondary-font">{desc}</small>
          </div>
          <p className="main-font fw-bold m-0 mt-3">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemBox;
