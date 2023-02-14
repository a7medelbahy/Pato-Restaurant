import { FooterGallery } from "../data";

const ThirdFooter = () => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="footer-gallery">
        <h4 className="main-font text-white mb-3">GALLERY</h4>
        <div className="d-flex gap-2 flex-wrap">
          {FooterGallery.map((imgBox) => {
            return (
              <img
                className="img-fluid d-block"
                src={imgBox.img}
                key={imgBox.id}
                alt="gallery"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThirdFooter;
