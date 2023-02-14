import MoreBtn from "../../../components/MoreBtn";

const ServiceBox = (props) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="service-box" data-aos="fade-up" data-aos-duration="1000">
        <div className="service-img rounded overflow-hidden mb-4">
          <img
            className="rounded img-fluid w-100 d-block"
            src={props.serviceBox.img}
            alt="service box"
          />
        </div>
        <h4>{props.serviceBox.title}</h4>
        <p className="secondary-font">{props.serviceBox.desc}</p>
        <MoreBtn path="/gallery" desc="Learn More" />
      </div>
    </div>
  );
};

export default ServiceBox;
