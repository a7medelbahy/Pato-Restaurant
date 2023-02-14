import PageHeader from "../../components/PageHeader";
import BlogImg from "../../images/bg-title-page-02.jpg";
import "./blog.css";
import LeftBlog from "./components/LeftBog";
import RightBlog from "./components/RightBlog";

const Blog = () => {
  return (
    <div className="blogs">
      <PageHeader HeaderImg={BlogImg} HeaderTitle="OUR BLOG" />
      <div className="section-padding">
        <div className="container">
          <div className="row g-5">
            <LeftBlog />
            <RightBlog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
