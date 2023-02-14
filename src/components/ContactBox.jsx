import "./mainCompnents.css";

const ContactBox = ({ icon, title, info1, info2 }) => {
  return (
    <div className="d-flex align-items-center g-4">
      <i className={"fs-2 me-4 fa-solid " + `${icon}`}></i>
      <div className="data">
        <h5 className="main-font mb-3">{title}</h5>
        <p className="secondary-font m-0">{info1}</p>
        <p className="secondary-font m-0">{info2}</p>
      </div>
    </div>
  );
};

export default ContactBox;
