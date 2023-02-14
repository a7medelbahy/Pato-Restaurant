import { HomeServicesData } from "../../../data";
import ServiceBox from "./ServiceBox";

const HomeServices = () => {
  return (
    <div className="home-services section-padding">
      <div className="container">
        <div className="row gy-5 justify-content-center align-items-center">
          {HomeServicesData.map((serviceBox) => {
            return <ServiceBox key={serviceBox.id} serviceBox={serviceBox} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
