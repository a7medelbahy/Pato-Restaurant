import { MenuStarters } from "../../../data";
import MainMenuBox from "./MainMenuBox";

const MainStarters = () => {
  return (
    <div className="col-md-6">
      <div className="menu-component">
        <h4 className="main-font mb-4">STARTERS</h4>
        <div className="content d-flex flex-column gap-4">
          {MenuStarters.map((item) => {
            return (
              <MainMenuBox
                key={item.id}
                title={item.title}
                price={item.price}
                desc={item.desc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainStarters;
