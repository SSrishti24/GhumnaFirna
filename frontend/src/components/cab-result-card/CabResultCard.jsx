import { useState } from "react";
import "./CabResultCard.scss";

function CabResultCard({ cab, searchData }) {
  const [showOptions, setShowOptions] = useState(false);

  const handleBooking = () => {
    console.log("Selected Cab:", cab);
    console.log("Journey Details:", searchData);

    // Next step: navigate to booking details page.
  };

  return (
    <article className="cab-result-card">

      <div className="cab-result-card__main">

        {/* Vehicle Information */}
        <div className="cab-result-card__vehicle">
          <div className="cab-result-card__image">
            <img src={cab.image} alt={cab.name} />
            <span>{cab.category}</span>
          </div>

          <div className="cab-result-card__vehicle-info">
            <h3>{cab.name}</h3>

            <div className="cab-result-card__meta">
              <span>{cab.seats} Seats</span>
              <span>{cab.luggage} Luggage Bags</span>
              <span>AC</span>
            </div>
          </div>
        </div>

        {/* Cab Details */}
        <div className="cab-result-card__details">

          {/* <div className="cab-result-card__detail">
            <div className="cab-result-card__label">
              <i className="bi bi-speedometer2"></i>
              <span>Km Charges</span> 
            </div>

            <p>
              <strong>₹{cab.rate}/KM</strong> after {cab.includedKm} KM
            </p>
          </div> */}

          <div className="cab-result-card__detail">
            <div className="cab-result-card__label">
              <i className="bi bi-fuel-pump"></i>
              <span>Fuel Type</span>
            </div>

            <p>
              <strong>{cab.fuel}</strong>
              {cab.fuel === "CNG" ? " With Refill Breaks" : ""}
            </p>
          </div>

          <div className="cab-result-card__detail">
            <div className="cab-result-card__label">
              <i className="bi bi-shield-check cancellation"></i>
              <span>Cancellation</span>
            </div>

            <p>
              <strong className="free-text">Free</strong>{" "}
              {cab.cancellation.replace("Free ", "")}
            </p>
          </div>

          <div className="cab-result-card__detail">
            <div className="cab-result-card__label">
              <i className="bi bi-wallet2"></i>
              <span>Part Payment</span>
            </div>

            <p>
              Pay <strong>{cab.advance}%</strong> now and rest to driver
            </p>
          </div>

        </div>

       
        {/* Price and Booking */}
        <div className="cab-result-card__bottom">

          <div className="cab-result-card__price">
            <del>₹{cab.originalPrice.toLocaleString("en-IN")}</del>
            <strong>₹{cab.price.toLocaleString("en-IN")}</strong>
          </div>

          <div className="cab-result-card__actions">
            <button
              type="button"
              className="cab-result-card__book"
              onClick={handleBooking}
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Additional Options */}
        {showOptions && (
          <div className="cab-result-card__extra">
            {cab.options.map((option, index) => (
              <span key={index}>
                <i className="bi bi-check-circle"></i>
                {option}
              </span>
            ))}
          </div>
        )}

      </div>

      {/* Bottom Benefits */}
      <div className="cab-result-card__benefits">
        <span>
          <i className="bi bi-receipt"></i>
          Toll & State Tax {cab.tollIncluded && cab.taxIncluded ? "Included" : "Extra"}
        </span>

        <span>
          <i className="bi bi-headset"></i>
          Customer Support
        </span>
      </div>

    </article>
  );
}

export default CabResultCard;