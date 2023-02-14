import MainHeading from "./../../../components/MainHeading";

const ContactSection = () => {
  return (
    <div className="contact-section py-5 section-background">
      <div className="container">
        <MainHeading sub="Send Us" main="A MESSAGE" />
        <form action="">
          <div
            className="row gy-5 justify-content-center"
            data-aos="flip-down"
            data-aos-duration="1000"
          >
            <div className="col-md-6 col-lg-3">
              <label htmlFor="exampleInputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                placeholder="Full Name"
              />
            </div>
            <div className="col-md-6 col-lg-3">
              <label htmlFor="exampleInputEmail" className="form-label">
                E-Mail
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail"
                placeholder="E-Mail Address"
              />
            </div>
            <div className="col-md-6 col-lg-3">
              <label htmlFor="exampleInputPhone" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                className="form-control"
                id="exampleInputPhone"
                placeholder="Phone Number"
              />
            </div>
            <div className="col-md-9">
              <label htmlFor="exampleInputText" className="form-label">
                Message
              </label>
              <textarea
                name="contact"
                id="exampleInputText"
                className="w-100 p-2 rounded"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn mt-5 secondary-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
