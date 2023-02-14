import { MenuDesert } from "../../../data";
import MainMenuBox from "./MainMenuBox";

const MainDesert = () => {
  return (
    <div className="col-md-6">
      <div className="menu-component">
        <h4 className="main-font mb-4">DESERT</h4>
        <div className="content d-flex flex-column gap-4">
          {MenuDesert.map((item) => {
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

export default MainDesert;
