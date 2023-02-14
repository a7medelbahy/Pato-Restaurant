import BlogArchive from "./BlogArchive";
import BlogCategoary from "./BlogCategoary";
import BlogPopular from "./BlogPopular";
import BlogSearch from "./BlogSearch";

const RightBlog = () => {
  return (
    <div className="col-lg-4">
      <div
        className="right-blog p-3 rounded d-flex flex-column gap-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <BlogSearch />
        <BlogCategoary />
        <BlogPopular />
        <BlogArchive />
      </div>
    </div>
  );
};

export default RightBlog;
