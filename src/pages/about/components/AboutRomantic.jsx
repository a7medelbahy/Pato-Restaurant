import MainHeading from "../../../components/MainHeading";
import RomanticImg from "../../../images/our-story-03.jpg";

const AboutRomantic = () => {
  return (
    <div className="about-romantic section-padding section-background">
      <div className="container">
        <div className="row gy-5 justify-content-center align-items-center">
          <div className="col-md-5">
            <div
              className="romantic-img rounded overflow-hidden"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <img
                src={RomanticImg}
                className="img-fluid w-100 d-block"
                alt="romantic img"
              />
            </div>
          </div>
          <div className="col-md-6 offset-md-1">
            <div
              className="content"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <MainHeading sub="Romantic" main="RESTAURANT" />
              <p className="secondary-font px-3">
                Fusce iaculis, quam quis volutpat cursus, tellus quam varius
                eros, in euismod lorem nisl in ante. Maecenas imperdiet
                vulputate dui sit amet vestibulum. Nulla quis suscipit nisl.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutRomantic;
