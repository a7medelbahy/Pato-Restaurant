import "./gallery.css";
import PageHeader from "../../components/PageHeader";
import GalleryImg from "../../images/our-menu-15.jpg";
import GallerySection from "./components/GallerySection";

const Gallery = () => {
  return (
    <div className="gallery">
      <PageHeader HeaderImg={GalleryImg} HeaderTitle="OUR GALLERY" />
      <GallerySection />
    </div>
  );
};

export default Gallery;
