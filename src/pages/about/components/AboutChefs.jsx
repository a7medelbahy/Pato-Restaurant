import MainHeading from "../../../components/MainHeading";
import { ChefsData } from "../../../data";
import ChefBox from "./ChefBox";

const AboutChefs = () => {
  return (
    <div className="about-chefs section-padding text-center">
      <div className="container">
        <MainHeading sub="Meet Our" main="CHEF" />
        <div className="row mt-5 gy-5 justify-content-center align-items-center">
          {ChefsData.map((chefBox) => {
            return <ChefBox key={chefBox.id} chefBox={chefBox} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutChefs;
