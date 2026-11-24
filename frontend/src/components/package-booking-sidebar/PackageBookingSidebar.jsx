
import { useNavigate } from "react-router-dom";
import "./PackageBookingSidebar.scss";

function PackageBookingSidebar({ packageData }) {
  const navigate = useNavigate();

  if (!packageData) return null;

  const handleBooking = () => {
    navigate("/inquiry", {
      state: {
        selectedPackages: [packageData],
        totalAmount: packageData.price,
        bookingAmount: 999,
      },
    });
  };

  const places = packageData.location
    ?.split("|")
    .map((place) => place.trim())
    .filter(Boolean) || [];

  const includedServices = [
    { name: "Hotel", icon: "bi-building" },
    { name: "Sightseeing", icon: "bi-person-walking" },
    { name: "Transfer", icon: "bi-car-front-fill" },
    { name: "Meal", icon: "bi-cup-hot-fill" },
  ];

  return (
    <aside className="package-sidebar">

      {/* Desktop Price and Booking Card */}
      <div className="package-sidebar__price-card">
        <div className="package-sidebar__price-header">
          <span className="package-sidebar__starting">
            Starting from
          </span>

          <div className="package-sidebar__price">
            <strong>
              ₹{packageData.price.toLocaleString("en-IN")}
            </strong>
            <span>Per Person</span>
          </div>

          <div className="package-sidebar__advance">
            <i className="bi bi-check-circle-fill"></i>
            Book your package with just
            <strong> ₹999</strong>
          </div>
        </div>

        <div className="package-sidebar__actions">
          <button
            type="button"
            className="package-sidebar__book-btn"
            onClick={handleBooking}
          >
            BOOK NOW
          </button>

          <button
            type="button"
            className="package-sidebar__enquire-btn"
             onClick={() => navigate("/about-us#contact-form")}
          >
            ENQUIRE NOW
          </button>
        </div>
      </div>

      {/* Package Includes Card */}
      <div className="package-sidebar__includes-card">

        <div className="package-sidebar__details">

          <div className="package-sidebar__detail">
            <i className="bi bi-clock-history duration-icon"></i>
            <p>
              <strong>Duration:</strong>{" "}
              {packageData.duration}
            </p>
          </div>

          <div className="package-sidebar__detail places-detail">
            <i className="bi bi-geo-alt-fill places-icon"></i>
            <div>
              <strong>Places to Visit:</strong>
              <p>{places.join(" | ")}</p>
            </div>
          </div>

        </div>

        <div className="package-sidebar__includes-heading">
          <span>Package Includes</span>
        </div>

        <div className="package-sidebar__services">
          {includedServices.map((service) => (
            <div
              className="package-sidebar__service"
              key={service.name}
            >
              <div className="package-sidebar__service-icon">
                <i className={`bi ${service.icon}`}></i>
              </div>
              <span>{service.name}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Need Help Card */}
      <div className="package-sidebar__help-card">
        <i className="bi bi-headset package-sidebar__help-icon"></i>

        <div className="package-sidebar__help-content">
          <h3>Need Help?</h3>

          <p>
            Call us:{" "}
            <a href="tel:01143030303">011-43030303</a>
            {" | "}
            <a href="tel:43131313">43131313</a>
          </p>

          <p>
            Mail us:{" "}
            <a href="mailto:Holidays@easemytrip.com">
              Holidays@easemytrip.com
            </a>
          </p>
        </div>
      </div>

      {/* Floating Mobile Enquiry Button */}
      <button
        type="button"
        className="package-sidebar__floating-enquiry"
        onClick={() => navigate("/about-us#contact-form")}
      >
        <i className="bi bi-envelope-fill"></i>
        <span>Enquire<br />Now</span>
      </button>

      {/* Mobile Fixed Booking Bar */}
      <div className="package-sidebar__mobile-booking">

        <div className="package-sidebar__booking-message">
          <i className="bi bi-check-circle-fill"></i>
          <strong>
            Book your package with just ₹999
          </strong>
        </div>

        <div className="package-sidebar__bottom-bar">
          <div className="package-sidebar__bottom-price">
            <strong>
              ₹{packageData.price.toLocaleString("en-IN")}
            </strong>
            <span>Per person on twin sharing</span>
          </div>

          <button
            type="button"
            className="package-sidebar__bottom-book"
            onClick={handleBooking}
          >
            Book Now
          </button>
        </div>

      </div>

    </aside>
  );
}

export default PackageBookingSidebar;
