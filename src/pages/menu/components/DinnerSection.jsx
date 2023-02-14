import { DinnerData } from "../../../data";
import ItemBox from "./ItemBox";

const DinnerSection = () => {
  return (
    <div className="menu-section section-padding">
      <div className="container">
        <div className="row gy-5 gx-5">
          {DinnerData.map((item) => {
            return (
              <ItemBox
                key={item.id}
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DinnerSection;
