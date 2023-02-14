import "./mainCompnents.css";

const MainHeading = ({ sub, main }) => {
  return (
    <div className="main-heading text-center mb-5">
      <h3>{sub}</h3>
      <h2 className="display-4">{main}</h2>
    </div>
  );
};

export default MainHeading;
