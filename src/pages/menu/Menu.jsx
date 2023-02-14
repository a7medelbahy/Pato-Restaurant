import "./menu.css";
import PageHeader from "./../../components/PageHeader";
import MenuImg from "../../images/bg-title-page-01.jpg";
import MainMenu from "./components/MainMenu";
import LunchHeader from "./components/LunchHeader";
import DinnerHeader from "./components/DinnerHeader";
import LunchSection from "./components/LunchSection";
import DinnerSection from "./components/DinnerSection";

const Menu = () => {
  return (
    <div className="menu">
      <PageHeader HeaderImg={MenuImg} HeaderTitle="OUR MENU" />
      <MainMenu />
      <LunchHeader />
      <LunchSection />
      <DinnerHeader />
      <DinnerSection />
    </div>
  );
};

export default Menu;
