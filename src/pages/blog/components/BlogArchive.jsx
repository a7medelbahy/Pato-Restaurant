import { Link } from "react-router-dom";
import { BlogArchiveData } from "../../../data";

const BlogArchive = () => {
  return (
    <div className="blog-archive">
      <h4 className="main-font mb-4">ARCHIVE</h4>
      <ul className="d-flex flex-column gap-3">
        {BlogArchiveData.map((item) => {
          return (
            <li key={item.id} className="d-flex justify-content-between">
              <Link className="secondary-font" to="/blog">
                {item.title}
              </Link>
              <small className="secondary-font">{item.num}</small>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogArchive;
