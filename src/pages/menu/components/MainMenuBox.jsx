const MainMenuBox = ({ title, desc, price }) => {
  return (
    <div className="menu-box d-flex flex-column justify-content-center justify-content-sm-start text-center text-sm-start">
      <div className="item-info">
        <p className="secondary-font fw-bold m-0">{title}</p>
        <small className="secondary-font">{desc}</small>
      </div>
      <div className="item-price">
        <p className="main-font fw-bold">${price}</p>
      </div>
    </div>
  );
};

export default MainMenuBox;
