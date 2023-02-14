import DrinksImg from "../../../images/our-menu-08.jpg";
import StartesImg from "../../../images/our-menu-10.jpg";
import { Link } from "react-router-dom";
const HomeMenuCollection = () => {
  const toUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };
  return (
    <div className="col-lg-4 col-md-6">
      <div className="row gy-4">
        <div className="col-12">
          <div
            className="menu-img overflow-hidden"
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            <img
              className="img-fluid w-100 d-block rounded"
              src={DrinksImg}
              alt="DrinksImg"
            />
            <Link onClick={toUp} to="/menu" className="btn main-btn">
              Drinks
            </Link>
          </div>
        </div>
        <div className="col-12">
          <div
            className="menu-img overflow-hidden"
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            <img
              className="img-fluid w-100 d-block rounded"
              src={StartesImg}
              alt="StartesImg"
            />
            <Link onClick={toUp} to="/menu" className="btn main-btn">
              Startes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMenuCollection;
