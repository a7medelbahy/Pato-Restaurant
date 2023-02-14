const BlogComment = () => {
  return (
    <div className="blog-comment mt-5">
      <h4 className="main-font">LEAVE A COMMENT</h4>
      <p className="secondary-font mb-4">
        Your email address will not be published. Required fields are marked *
      </p>
      <form action="">
        <div className="form-content d-flex flex-column gap-3">
          <div>
            <label htmlFor="exampleInputText" className="form-label">
              Comment
            </label>
            <textarea
              id="exampleInputText"
              placeholder="Comment"
              className="p-3 w-100 rounded"
            ></textarea>
          </div>
          <div>
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              placeholder="Full Name"
              aria-describedby="emailHelp"
            />
          </div>
          <div>
            <label htmlFor="exampleInputEmail" className="form-label">
              E-Mail
            </label>
            <input
              type="email"
              className="form-control w-lg-50 w-100"
              placeholder="Your E-Mail"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
        <button type="submit" className="secondary-btn btn mt-5">
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default BlogComment;
