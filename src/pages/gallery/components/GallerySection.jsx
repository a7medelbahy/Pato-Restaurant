import MainHeading from "./../../../components/MainHeading";
import { useState } from "react";
import { GalleryData } from "../../../data";
import GalleryBox from "./GalleryBox";

const GallerySection = () => {
  const [items, setItems] = useState(GalleryData);
  const filterGallery = catItem => {
    let filteredGallery = GalleryData.filter((filterItem) => {
      return filterItem.categoary === catItem;
    });
    setItems(filteredGallery);
  };
  let myBtns = document.querySelectorAll(".gallery .gallery-filters li button");
  myBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      myBtns.forEach((element) => {
        element.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
    });
  });

  return (
    <div className="gallery section-padding">
      <div className="container">
        <MainHeading sub="Discover" main="OUR RESTURANT" />
        <ul className="gallery-filters d-flex mb-5 gap-3 flex-wrap justify-content-center align-items-center">
          <li>
            <button className="active" onClick={() => setItems(GalleryData)}>
              All
            </button>
          </li>
          <li>
            <button onClick={() => filterGallery("food")}>FOOD</button>
          </li>
          <li>
            <button onClick={() => filterGallery("interior")}>INTERIOR</button>
          </li>
          <li>
            <button onClick={() => filterGallery("vip")}>VIP</button>
          </li>
          <li>
            <button onClick={() => filterGallery("events")}>EVENTS</button>
          </li>
        </ul>
        <div className="row gy-5 align-items-center justify-content-center">
          {items.map((galleryBox) => {
            return <GalleryBox key={galleryBox.id} galleryBox={galleryBox} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
