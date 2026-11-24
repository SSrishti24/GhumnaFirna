import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CabResultCard.scss";

function CabResultCard({ cab, searchData }) {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  const handleBooking = () => {
    const journeyType =
      searchData?.tripType === "hourly"
        ? "Hourly Rental"
        : searchData?.tripType === "outstation"
        ? "Outstation"
        : "Airport Transfer";

    const enquiryDescription = `
      Cab Booking Enquiry

      Cab Name: ${cab.name}
      Cab Category: ${cab.category}
      Fuel Type: ${cab.fuel}
      Seats: ${cab.seats}
      Cab Price: ₹${cab.price.toLocaleString("en-IN")}
      
      Journey Type: ${journeyType}
      Pickup Location: ${searchData?.pickup || "Not specified"}
      ${searchData?.tripType !== "hourly"
        ? `Drop Location: ${searchData?.drop || "Not specified"}`
        : ""}

      Pickup Date & Time: ${
        searchData?.pickupDateTime
          ? new Date(searchData.pickupDateTime).toLocaleString("en-IN", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "numeric",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
            })
          : "Not specified"
      }
      ${searchData?.returnTrip && searchData?.returnDateTime
        ? `Return Date & Time: ${new Date(searchData.returnDateTime).toLocaleString("en-IN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          })}`
        : ""}
      ${searchData?.tripType === "hourly"
        ? `Rental Duration: ${searchData?.hours || "4"} Hours`
        : ""}
    `.trim();

    navigate("/about-us#contact-form", {
      state: {
        category: "Cab",
        description: enquiryDescription,
      },
    });
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