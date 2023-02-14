import BlogImg from "../../../images/blog-05.jpg";

const BlogContent = () => {
  return (
    <div className="blog-content d-flex flex-column gap-4">
      <div className="blog-img rounded overflow-hidden">
        <img src={BlogImg} className="img-fluid w-100 d-block" alt="blog" />
        <div className="img-info px-1 py-2 rounded text-center text-white">
          <h5 className="main-font">10</h5>
          <small>Aug, 2022</small>
        </div>
      </div>
      <div className="blog-info">
        <h3 className="main-font">COOKING RECIPE DELICIOUS</h3>
        <small className="secondary-font">
          by Admin | 28 December, 2018 | Cooking, Food | 8 Comments
        </small>
      </div>
      <div className="blog-desc">
        <p className="secondary-font fw-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
          mi sem. Nulla facilisi. Sed ultricies eros a nibh tempus, in sodales
          mi vestibulum. Nullam quis dui ac nisl ultrices euismod et sit amet
          urna. Morbi semper sapien quis ex tempor, sit amet scelerisque eros
          rhoncus. Cras scelerisque auctor gravida. Nunc fermentum luctus
          rhoncus. Nulla vulputate fermentum convallis. In quis pellentesque
          tortor. Cras metus nibh, gravida vitae ante vel, finibus semper
          tellus. Nulla vel tincidunt magna. Morbi tempor velit lectus, eu
          commodo quam volutpat vitae.
        </p>
      </div>
    </div>
  );
};

export default BlogContent;
