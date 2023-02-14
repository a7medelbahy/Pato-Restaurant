import PageHeader from "../../components/PageHeader";
import ContactImg from "../../images/our-menu-13.jpg";
import ContactInfo from "./components/ContactInfo";
import ContactMap from "./components/ContactMap";
import ContactSection from "./components/ContactSection";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <PageHeader HeaderImg={ContactImg} HeaderTitle="CONTACT US" />
      <ContactMap />
      <ContactSection />
      <ContactInfo />
    </div>
  );
};

export default Contact;
