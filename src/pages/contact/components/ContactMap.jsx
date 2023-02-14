const ContactMap = () => {
  return (
    <div className="contact-map py-5 section-background">
      <div className="container">
        <div
          className="map-container p-2 bg-white rounded"
          data-aos="flip-up"
          data-aos-duration="1000"
        >
          <iframe
            title="contact-map"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3023.5191121639245!2d-74.005200464905!3d40.728601594537594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s8th%20floor%2C%20379%20Hudson%20St%2C%20New%20York%2C%20NY%2010018!5e0!3m2!1sar!2seg!4v1665875274224!5m2!1sar!2seg"
            className="w-100 rounded"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
