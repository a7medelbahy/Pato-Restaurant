import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";

const GalleryBox = (props) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div
        className="gallery-box rounded overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img
          src={props.galleryBox.img}
          className="img-fluid w-100 d-block"
          alt="gallery"
          data-fancybox="gallery"
        />
      </div>
    </div>
  );
};

export default GalleryBox;
