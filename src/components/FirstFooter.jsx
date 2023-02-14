const FirstFooter = () => {
    return (
      <div className="col-lg-4 col-md-6">
        <div className="contact-info d-flex flex-column gap-5">
          <div className="contact-us">
            <h4 className="main-font text-white mb-3">CONTACT US</h4>
            <p className="secondary-font text-white-50">
              <i className="me-2 fa-solid fa-location-dot"></i>
              8th floor, 379 Hudson St, New York
            </p>
            <p className="secondary-font text-white-50">
              <i className="me-2 fa-solid fa-phone"></i>
              +2 01207933578
            </p>
            <p className="secondary-font text-white-50">
              <i className="me-2 fa-solid fa-envelope"></i>
              ahmedelbahy06@gmail.com
            </p>
          </div>
          <div className="opening-time">
            <h4 className="main-font text-white mb-3">OPENING TIMES</h4>
            <p className="secondary-font text-white-50">09:30 AM - 11:00 PM</p>
            <p className="secondary-font text-white-50">Every Day</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default FirstFooter;
  