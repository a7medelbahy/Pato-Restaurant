import { BlogPopularData } from "../../../data";
import { Link } from "react-router-dom";

const BlogPopular = () => {
  return (
    <div className="blog-popular">
      <h4 className="main-font mb-4">MOST POPULAR</h4>
      <ul className="d-flex flex-column gap-3">
        {BlogPopularData.map((item) => {
          return (
            <div
              key={item.id}
              className="item-box d-flex flex-wrap gap-4 align-items-center"
            >
              <div className="item-img rounded overflow-hidden">
                <img src={item.img} className="img-fluid d-block" alt="item" />
              </div>
              <div className="item-data">
                <div className="item-info">
                  <p className="m-0 mb-1">
                    <Link className="main-font" to="/blog">
                      {item.title}
                    </Link>
                  </p>
                  <small className="secondary-font">{item.date}</small>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogPopular;
