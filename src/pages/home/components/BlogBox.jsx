import MoreBtn from "../../../components/MoreBtn";

const BlogBox = (props) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="blog-box" data-aos="fade-up" data-aos-duration="1000">
        <div className="blog-img rounded overflow-hidden">
          <img
            src={props.blogBox.img}
            className="img-fluid w-100 d-block"
            alt="blog"
          />
        </div>
        <h4 className="mt-4">{props.blogBox.title}</h4>
        <p className="secondary-font mb-4">{props.blogBox.desc}</p>
        <MoreBtn path="/blog" desc="CONTINUE READING" />
      </div>
    </div>
  );
};

export default BlogBox;
