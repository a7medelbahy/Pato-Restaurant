import { MenuMain } from "../../../data";
import MainMenuBox from "./MainMenuBox";

const MainMain = () => {
  return (
    <div className="col-md-6">
      <div className="menu-component">
        <h4 className="main-font mb-4">MAIN</h4>
        <div className="content d-flex flex-column gap-4">
          {MenuMain.map((item) => {
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

export default MainMain;
