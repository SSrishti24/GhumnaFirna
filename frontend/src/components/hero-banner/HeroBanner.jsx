
import { useEffect, useState } from "react";

import coverImage1 from "../../assets/cover.png";
import coverImage2 from "../../assets/cover2.png";
import coverImage3 from "../../assets/cover3.png";
import coverImage4 from "../../assets/cover4.png";

import "./HeroBanner.scss";

const images = [
  coverImage1,
  coverImage2,
  coverImage3,
  coverImage4,
];

function HeroBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  // Automatic slider
  useEffect(() => {
    const interval = setInterval(() => {
      setTransitionEnabled(true);
      setActiveIndex((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Reset after last cloned image
  const handleTransitionEnd = () => {
    if (activeIndex === images.length) {
      setTransitionEnabled(false);
      setActiveIndex(0);
    }
  };

  // Re-enable transition after reset
  useEffect(() => {
    if (activeIndex === 0 && !transitionEnabled) {
      const frame = requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });

      return () => cancelAnimationFrame(frame);
    }
  }, [activeIndex, transitionEnabled]);

  const handleDotClick = (index) => {
    setTransitionEnabled(true);
    setActiveIndex(index);
  };

  return (
    <section className="hero-banner">
      <div
        className="hero-banner__slider"
        onTransitionEnd={handleTransitionEnd}
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          transition: transitionEnabled
            ? "transform 0.7s ease-in-out"
            : "none",
        }}
      >
        {[...images, images[0]].map((image, index) => (
          <div className="hero-banner__slide" key={index}>
            <img
              src={image}
              alt={`Travel destination ${index + 1}`}
              className="hero-banner__image"
            />
          </div>
        ))}
      </div>

      <div className="hero-banner__dots">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`hero-banner__dot ${
              (activeIndex % images.length) === index ? "active" : ""
            }`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroBanner;
