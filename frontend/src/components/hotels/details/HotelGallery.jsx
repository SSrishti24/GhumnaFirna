
import { useEffect, useState } from "react";

function HotelGallery({ hotel }) {
  const images = hotel.gallery?.length
    ? hotel.gallery
    : hotel.image
      ? [hotel.image]
      : [];

  const [activeImage, setActiveImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Duplicate first image for seamless looping
  const sliderImages = images.length > 1
    ? [...images, images[0]]
    : images;

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveImage((prev) => prev + 1);
      setIsTransitioning(true);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Reset from duplicate first image to original first image
  const handleTransitionEnd = () => {
    if (activeImage === images.length) {
      setIsTransitioning(false);
      setActiveImage(0);
    }
  };

  // Manual image change
  const changeImage = (direction) => {
    setIsTransitioning(true);

    setActiveImage((prev) => {
      if (direction === 1) {
        return prev >= images.length - 1 ? 0 : prev + 1;
      }

      return prev <= 0 ? images.length - 1 : prev - 1;
    });
  };

  if (!images.length) return null;

  return (
    
<div className="hotel-gallery">
  <div className="hotel-gallery__main">
    <div
      className="hotel-gallery__track"
      onTransitionEnd={handleTransitionEnd}
      style={{
        transform: `translateX(-${activeImage * 100}%)`,
        transition: isTransitioning
          ? "transform 2s ease-in-out"
          : "none",
      }}
    >
      {sliderImages.map((image, index) => (
        <img
          key={`${image}-${index}`}
          src={image}
          alt={`${hotel.name} ${index + 1}`}
        />
      ))}
    </div>

    <div className="hotel-gallery__count">
      {(activeImage % images.length) + 1} / {images.length}
    </div>

    <button
      type="button"
      className="hotel-gallery__arrow hotel-gallery__arrow--prev"
      onClick={() => changeImage(-1)}
    >
      &#10094;
    </button>

    <button
      type="button"
      className="hotel-gallery__arrow hotel-gallery__arrow--next"
      onClick={() => changeImage(1)}
    >
      &#10095;
    </button>
  </div>
</div>

  );
}

export default HotelGallery;
