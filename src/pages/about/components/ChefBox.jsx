const ChefBox = (props) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div
        className="chef-box rounded"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="chef-img rounded-circle  overflow-hidden">
          <img
            src={props.chefBox.img}
            className="rounded-circle img-fluid"
            alt="chef"
          />
        </div>
        <div className="chef-info">
          <h5 className="main-font">{props.chefBox.name}</h5>
          <small className="secondary-font">{props.chefBox.job}</small>
        </div>
        <p className="desc p-3 secondary-font">{props.chefBox.desc}</p>
      </div>
    </div>
  );
};

export default ChefBox;
