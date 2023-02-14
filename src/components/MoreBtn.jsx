import "./mainCompnents.css";
import { Link } from "react-router-dom";

const MoreBtn = ({ desc, path }) => {
  const toUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  return (
    <Link onClick={toUp} className="more-btn" to={path}>
      <p className="m-0 d-inline">{desc}</p>
      <i className="ms-3 fa-sharp fa-solid fa-right-long"></i>
    </Link>
  );
};

export default MoreBtn;
