const BlogSearch = () => {
  return (
    <form action="">
      <div className="d-flex justify-content-between align-items-center">
        <input
          type="search"
          className="w-100"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn secondary-btn">
          <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </form>
  );
};

export default BlogSearch;
