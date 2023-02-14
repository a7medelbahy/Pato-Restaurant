import { Link } from "react-router-dom";

const HomeHeaderBox = (props) => {
  const toUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  return (
    <div className="header-container text-center">
      <img
        src={props.headerBox.img}
        className="img-fluid h-100 w-100 d-block"
        alt="header"
      />
      <div className="header-content">
        <h3 data-aos="zoom-in" data-aos-duration="1000" className="display-4">
          Welcome to
        </h3>
        <h1
          data-aos="zoom-out"
          data-aos-duration="1000"
          className="display-3 mb-4 text-white"
        >
          PATO RESTAURANT
        </h1>
        <Link
          onClick={toUp}
          data-aos="flip-up"
          data-aos-duration="2000"
          to={props.headerBox.buttonPath}
          className="btn main-btn"
        >
          {props.headerBox.buttonName}
        </Link>
      </div>
    </div>
  );
};

export default HomeHeaderBox;
