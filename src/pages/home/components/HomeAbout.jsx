import MainHeading from "../../../components/MainHeading";
import AboutImg from "../../../images/our-story-01.jpg";
import MoreBtn from "../../../components/MoreBtn";

const HomeAbout = () => {
  return (
    <div className="home-about section-padding text-center section-background">
      <div className="container">
        <div className="row gy-5 justify-content-center align-items-center">
          <div className="col-md-6">
            <div
              className="content"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <MainHeading sub="Italian Restaurant" main="WELCOME" />
              <p className="content-desc secondary-font">
                Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est.
                Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi,
                ac facilisis ligula sem id neque.
              </p>
              <MoreBtn path="/about" desc="Our Story" />
            </div>
          </div>
          <div className="col-md-5 offset-lg-1">
            <div
              className="about-img rounded w-100 overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                className="w-100 img-fluid rounded"
                src={AboutImg}
                alt="about img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
