import Video from "../../components/Video";
import Events from "./components/Events";
import HomeAbout from "./components/HomeAbout";
import HomeBooking from "./components/HomeBooking";
import HomeDiscover from "./components/HomeDiscover";
import HomeHeader from "./components/HomeHeader";
import HomeMenu from "./components/HomeMenu";
import HomeReviews from "./components/HomeReviews";
import HomeServices from "./components/HomeServices";
import HomeVideo from "../../images/The Top Five Secrets of a Successful Restaurant.mp4";
import HomeBlog from "./components/HomeBlog";
import "./home.css";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <HomeAbout />
      <HomeDiscover />
      <HomeServices />
      <HomeMenu />
      <Events />
      <HomeBooking />
      <HomeReviews />
      <Video myVideo={HomeVideo} />
      <HomeBlog />
    </div>
  );
};

export default Home;
