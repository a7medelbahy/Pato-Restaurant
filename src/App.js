import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import Menu from "./pages/menu/Menu";
import Reservation from "./pages/reservation/Reservation";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import BeforFooter from "./components/BeforeFooter";
import Footer from "./components/Footer";
import AfterFooter from "./components/AfterFooter";
import UpBtn from "./components/UpBtn";
import NotFound from "./pages/notFound/NotFound";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useState, useEffect } from "react";

const App = () => {

  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
  const styling = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    margin: "0px 0px",
  };
  
  return (
    <React.Fragment>
      {loading ? (
        <ClimbingBoxLoader
          style={styling}
          color={"#ec1d25"}
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <BrowserRouter>
          <Navbar />
          <UpBtn />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Pato-Restaurant" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <BeforFooter />
          <Footer />
          <AfterFooter />
        </BrowserRouter>
      )}
    </React.Fragment>
  );
};

export default App;
