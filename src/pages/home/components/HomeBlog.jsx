import MainHeading from "../../../components/MainHeading";
import { HomeBlogData } from "../../../data";
import BlogBox from "./BlogBox";

const HomeBlog = () => {
  return (
    <div className="home-blog section-padding">
      <div className="container">
        <MainHeading sub="Latest News" main="THE BLOG" />
        <div className="row gy-5 justify-content-center align-items-center">
          {HomeBlogData.map((blogBox) => {
            return <BlogBox key={blogBox.id} blogBox={blogBox} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
