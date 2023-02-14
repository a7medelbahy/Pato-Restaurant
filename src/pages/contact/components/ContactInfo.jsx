import ContactBox from "../../../components/ContactBox";
import ContactImg from "../../../images/photo-gallery-13.jpg";

const ContactInfo = () => {
  return (
    <div className="contact-info section-padding">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6">
            <div
              className="content d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center gap-5"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <ContactBox
                icon="fa-location-dot"
                title="LOCATION"
                info1="8th floor, 379 Hudson St,"
                info2="New York, NY 10018"
              />
              <ContactBox
                icon="fa-phone"
                title="PHONE"
                info1="+2 01207933578"
                info2="048 3446038"
              />
              <ContactBox
                icon="fa-clock"
                title="OPENING HOURS"
                info1="09:30 AM - 11:00 PM"
                info2="Every Day"
              />
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div
              className="contact-img rounded overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={ContactImg}
                className="img-fluid w-100 d-block"
                alt="contact"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
