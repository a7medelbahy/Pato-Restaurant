import MainHeading from "./../../../components/MainHeading";

const AboutStory = () => {
  return (
    <div className="about-story text-center section-padding section-background">
      <div className="container">
        <MainHeading sub="Italian Restaurant" main="OUR STORY" />
        <div className="story-content">
          <p
            className="px-5 secondary-font"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Fusce at risus eget mi auctor pulvinar. Suspendisse maximus
            venenatis pretium. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Aliquam purus purus,
            lacinia a scelerisque in, luctus vel felis. Donec odio diam,
            dignissim a efficitur at, efficitur et est. Pellentesque semper est
            ut pulvinar ullamcorper. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Nulla et leo
            accumsan, egestas velit ac, fringilla tortor. Sed varius justo sed
            luctus mattis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutStory;
