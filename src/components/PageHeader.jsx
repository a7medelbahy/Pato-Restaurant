import "./mainCompnents.css";

const PageHeader = ({ HeaderImg, HeaderTitle }) => {
  return (
    <div className="page-header overflow-hidden">
      <img
        src={HeaderImg}
        className="img-fluid w-100 d-block"
        alt="header img"
      />
      <h2 className="main-font fw-bold display-4 text-white text-center">
        {HeaderTitle}
      </h2>
    </div>
  );
};

export default PageHeader;
