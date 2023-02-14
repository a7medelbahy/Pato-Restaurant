import MainHeading from "../../components/MainHeading";
import PageHeader from "../../components/PageHeader";
import NotFoundImg from "../../images/intro-03.jpg";
import { Link } from "react-router-dom";

const NotFound = () => {
  const toUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  return (
    <div className="not-found">
      <PageHeader HeaderImg={NotFoundImg} HeaderTitle="404 ERROR" />
      <div className="container">
        <div className="section-padding text-center">
          <MainHeading sub="Sorry" main="Page Not Found" />
          <p className="secondary-font">
            We are sorry, the page you have looked for does not exist in our
            website! Maybe go to our home page or try to use a search?
          </p>
          <Link onClick={toUp} to="/" className="btn secondary-btn mt-5">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
