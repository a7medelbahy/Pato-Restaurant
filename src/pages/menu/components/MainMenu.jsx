import MainDesert from "./MainDesert";
import MainDrinks from "./MainDrinks";
import MainMain from "./MainMain";
import MainStarters from "./MainStarters";

const MainMenu = () => {
  return (
    <div className="main-menu section-padding section-background">
      <div className="container">
        <div className="row gy-5 gx-5">
          <MainStarters />
          <MainDrinks />
          <MainMain />
          <MainDesert />
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
