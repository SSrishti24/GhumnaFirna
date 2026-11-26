
import { useNavigate } from "react-router-dom";

import "./HotelCard.scss";

function HotelCard({ hotel }) {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate(`/hotels/${hotel.id}`);
  };

  return (
    <article
      className="hotel-card"
      onClick={handleBooking}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleBooking();
        }
      }}
      role="link"
      tabIndex={0}
    >
      <div className="hotel-card__image">
        <img src={hotel.image} alt={hotel.name} />

        <span className="hotel-card__location">
          <i className="bi bi-geo-alt"></i>
          {hotel.location}
        </span>

        {hotel.discount > 0 && (
          <span className="hotel-card__discount">
            {hotel.discount}% OFF
          </span>
        )}
      </div>

      <div className="hotel-card__content">
        <h3>{hotel.name}</h3>

        <div className="hotel-card__category">
          <i className="bi bi-gem"></i>
          <span>{hotel.category}</span>
          <span>{hotel.location}</span>
        </div>

        <div className="hotel-card__rating">
          <span className="hotel-card__stars">
            {"★".repeat(Math.round(hotel.rating))}
          </span>

          <strong>{hotel.rating.toFixed(1)}</strong>

          <small>({hotel.reviews} reviews)</small>
        </div>

        <div className="hotel-card__bottom">
          <div className="hotel-card__pricing">
            {hotel.originalPrice > hotel.price && (
              <del>
                ₹{hotel.originalPrice.toLocaleString("en-IN")}
              </del>
            )}

            <div>
              <strong>
                ₹{hotel.price.toLocaleString("en-IN")}
              </strong>
              <span>/per night</span>
            </div>
          </div>

          <button
            type="button"
            className="hotel-card__book"
            onClick={(e) => {
              e.stopPropagation();
              handleBooking();
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </article>
  );
}

export default HotelCard;
