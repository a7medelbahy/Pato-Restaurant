import { Link } from "react-router-dom";
import { BlogCategoaryData } from "../../../data";

const BlogCategoary = () => {
  return (
    <div className="blog-categoary">
      <h4 className="main-font mb-4">CATEGORIES</h4>
      <ul className="d-flex flex-column gap-3">
        {BlogCategoaryData.map((item) => {
          return (
            <li key={item.id}>
              <Link className="secondary-font" to="/blog">
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogCategoary;
