import BlogComment from "./BlogComment";
import BlogContent from "./BlogContent";

const LeftBlog = () => {
  return (
    <div className="col-lg-8">
      <div className="left-blog" data-aos="fade-down" data-aos-duration="1000">
        <BlogContent />
        <BlogComment />
      </div>
    </div>
  );
};

export default LeftBlog;
