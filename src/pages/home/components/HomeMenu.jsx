import MainHeading from "../../../components/MainHeading";

import HomeMenuCollection from "./HomeMenuCollection";
import HomeMenuDesert from "./HomeMenuDesert";
import HomeMenuDinner from "./HomeMenuDinner";
import HomeMenuHappy from "./HomeMenuHappy";
import HomeMenuLunch from "./HomeMenuLunch";

const HomeMenu = () => {
  return (
    <div className="home-menu section-padding section-background">
      <div className="container">
        <MainHeading sub="Discover" main="OUR MENU" />
        <div className="row gy-5 justify-content-center align-items-center">
          <HomeMenuLunch />
          <HomeMenuDinner />
          <HomeMenuCollection />
          <HomeMenuHappy />
          <HomeMenuDesert />
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;
