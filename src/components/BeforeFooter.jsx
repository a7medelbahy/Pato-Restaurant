import "./mainCompnents.css";

const BeforFooter = () => {
  return (
    <div className="befor-footer section-background section-padding">
      <div className="container">
        <form
          action="/"
          className="d-flex justify-content-center align-items-center flex-wrap gap-4"
        >
          <label className="main-font fs-4 fw-bold">SPECIALS SIGN UP</label>
          <div className="d-flex justify-content-between align-items-center">
            <input type="email" name="sign-up" placeholder="E-Mail Adress" />
            <i className="fa-solid fa-envelope"></i>
          </div>
          <button type="submit" className="btn secondary-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default BeforFooter;
