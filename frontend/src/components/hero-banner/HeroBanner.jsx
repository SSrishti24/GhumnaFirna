
import coverImage from "../../assets/travel-cover.png";
import "./HeroBanner.scss";

function HeroBanner() {
  return (
    <section className="hero-banner">
      <img
        src={coverImage}
        alt="Explore beautiful travel destinations"
        className="hero-banner__image"
      />
    </section>
  );
}

export default HeroBanner;
