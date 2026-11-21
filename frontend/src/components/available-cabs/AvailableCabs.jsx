
import { useNavigate } from "react-router-dom";
import { cabResultsData } from "../../data/cabResultsData";

import "./AvailableCabs.scss";

function AvailableCabs() {
  const navigate = useNavigate();

  const handleBookNow = () => {
    document.getElementById("cab-booking-form")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
    });
  };

  return (
    <section className="available-cabs">
      <div className="available-cabs__container">

        <div className="available-cabs__heading">
          <div>
            <span className="available-cabs__eyebrow">
              TRAVEL YOUR WAY
            </span>
            <h2>Choose Your Ride</h2>
            <p>
              Find the right cab for your next journey. Comfortable rides
              for every travel plan.
            </p>
          </div>
        </div>

        <div className="available-cabs__grid">
          {cabResultsData.map((cab) => (
            <article className="cab-card" key={cab.id}>

              <div className="cab-card__image-wrapper">
                <img
                  src={cab.image}
                  alt={cab.name}
                  className="cab-card__image"
                />

                <span className="cab-card__category">
                  {cab.category}
                </span>
              </div>

              <div className="cab-card__content">
                <div className="cab-card__title-row">
                  <h3>{cab.name}</h3>

                  <span className="cab-card__seats">
                    <i className="bi bi-people"></i>
                    {cab.seats} Seats
                  </span>
                </div>

                <div className="cab-card__features">
                  <span>
                    <i className="bi bi-briefcase"></i>
                    {cab.luggage} Bags
                  </span>

                  <span>
                    <i className="bi bi-snow"></i>
                    AC
                  </span>
                </div>

                <div className="cab-card__footer">
                  <div className="cab-card__price">
                    <span>Starting from</span>
                    <strong>
                      ₹{cab.rate}
                      <small>/km</small>
                    </strong>
                  </div>

                  <button
                    type="button"
                    className="cab-card__book"
                    onClick={handleBookNow}
                  >
                    Book Now
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AvailableCabs;
