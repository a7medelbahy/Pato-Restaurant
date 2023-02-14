import MainHeading from "../../../components/MainHeading";
import RecipeImg from "../../../images/our-story-01.jpg";

const AboutRecipe = () => {
  return (
    <div className="about-recipe section-padding section-background text-center">
      <div className="container">
        <div className="row gy-5 justify-content-center align-items-center">
          <div className="col-md-6">
            <div
              className="content"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <MainHeading sub="Delicious" main="RECIPES" />
              <p className="secondary-font px-3">
                Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est.
                Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi,
                ac facilisis ligula sem id neque.
              </p>
            </div>
          </div>
          <div className="col-md-5 offset-md-1">
            <div
              className="recipe-img rounded overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={RecipeImg}
                className="img-fluid w-100 d-block"
                alt="recipe img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutRecipe;
