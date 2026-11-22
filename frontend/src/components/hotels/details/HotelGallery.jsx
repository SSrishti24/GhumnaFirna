
import { useState } from "react";

function HotelGallery({ hotel }) {
  const images = hotel.gallery?.length
    ? hotel.gallery
    : [hotel.image];

  const [activeImage, setActiveImage] = useState(0);

  const changeImage = (direction) => {
    setActiveImage((prev) =>
      (prev + direction + images.length) % images.length
    );
  };

  return (
    <div className="hotel-gallery">
      <div className="hotel-gallery__main">
        <img
          src={images[activeImage]}
          alt={`${hotel.name} ${activeImage + 1}`}
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="hotel-gallery__arrow hotel-gallery__arrow--prev"
              onClick={() => changeImage(-1)}
              aria-label="Previous image"
            >
              <i className="bi bi-chevron-left"></i>
            </button>

            <button
              type="button"
              className="hotel-gallery__arrow hotel-gallery__arrow--next"
              onClick={() => changeImage(1)}
              aria-label="Next image"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </>
        )}

        <span className="hotel-gallery__count">
          {activeImage + 1} / {images.length}
        </span>
      </div>

      <div className="hotel-gallery__thumbnails">
        {images.slice(0, 3).map((image, index) => (
          <button
            type="button"
            key={`${image}-${index}`}
            className={activeImage === index ? "active" : ""}
            onClick={() => setActiveImage(index)}
          >
            <img src={image} alt={`${hotel.name} view ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default HotelGallery;
