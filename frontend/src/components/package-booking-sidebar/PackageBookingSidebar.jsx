
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PackageBookingSidebar.scss";

function PackageBookingSidebar({ packageData }) {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("1");
  const [customTravelers, setCustomTravelers] = useState("8");

  if (!packageData) return null;

  const pricing = packageData?.pricing || {};

  const currentPrice =
    selectedOption === "group"
      ? Number(pricing.group || 0)
      : Number(
          pricing.perPerson?.find(
            (item) => item.people === Number(selectedOption)
          )?.price ?? packageData?.price ?? 0
        );

  const travelerCount =
    selectedOption === "group"
      ? Math.min(10, Math.max(8, Number(customTravelers) || 8))
      : Number(selectedOption);

  const totalAmount = currentPrice * travelerCount;

  const selectedLabel =
    selectedOption === "group"
      ? `Group (${travelerCount} Travelers)`
      : `${selectedOption} ${
        travelerCount === 1 ? "Person" : "Persons"
      }`;

  const formatPrice = (price) =>
    Number(price || 0).toLocaleString("en-IN");

  const handleBooking = () => {
    const formatDetails = (value) => {
      if (value === null || value === undefined) return "";

      if (Array.isArray(value)) {
        return value
          .map((item, index) => {
            if (typeof item === "object" && item !== null) {
              return `${index + 1}. ${formatDetails(item)}`;
            }
            return `${index + 1}. ${item}`;
          })
          .join("\n");
      }

      if (typeof value === "object") {
        return Object.entries(value)
          .map(([key, val]) => {
            const formattedKey = key
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (char) => char.toUpperCase());

            return `${formattedKey}: ${formatDetails(val)}`;
          })
          .join("\n");
      }

      return String(value);
    };

    const packageDescription = `
      PACKAGE BOOKING ENQUIRY

      PACKAGE DETAILS
      Package Name: ${packageData.title}
      Duration: ${packageData.duration}
      Location: ${packageData.location}
      Stay Plan: ${packageData.stayPlan || "Not specified"}

      TRAVEL DETAILS
      Travelers: ${selectedLabel}
      Price Per Person: ₹${formatPrice(currentPrice)}
      Total Travelers: ${travelerCount}
      Total Package Amount: ₹${formatPrice(totalAmount)}
    `.trim();

    const updatedPackage = {
      ...packageData,
      price: currentPrice,
      totalAmount,
      selectedPricing: {
        type: selectedOption,
        label: selectedLabel,
        travelers: travelerCount,
        perPersonPrice: currentPrice,
        totalAmount,
      },
    };

    navigate("/about-us#contact-form", {
      state: {
        category: "Package",
        description: packageDescription,

        selectedPackage: updatedPackage,
        selectedPackages: [updatedPackage],

        bookingDetails: updatedPackage.selectedPricing,

        totalAmount,
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

          {/* Person Filter */}
          <div className="package-sidebar__person-filter">
            <label htmlFor="package-person-count">
              Select Travelers
            </label>

            <select
              id="package-person-count"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              {pricing.perPerson?.map((item) => (
                <option key={item.people} value={String(item.people)}>
                  {item.people} {item.people === 1 ? "Person" : "Persons"}
                </option>
              ))}

              {pricing.group !== undefined && (
                <option value="group">Group</option>
              )}

            </select>

            {/* Additional Travelers Field */}
            {(selectedOption === "group") && (
              <div className="package-sidebar__custom-travelers">
                <label htmlFor="custom-travelers">
                  Number of Travelers
                </label>

                <input
                  id="custom-travelers"
                  type="number"
                  min="1"
                  step="1"
                  value={customTravelers}
                  onChange={(e) => setCustomTravelers(e.target.value)}
                  placeholder="Enter travelers"
                />
              </div>
            )}
          </div>

          {/* Dynamic Price */}
          <div className="package-sidebar__price">
            <span className="package-sidebar__per-person">
              ₹{formatPrice(currentPrice)} / person
            </span>

            <strong>₹{formatPrice(totalAmount)}</strong>

            <span className="package-sidebar__total-label">
              Total Package Amount
            </span>
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

        {/* Travelers Selection */}
        <div className="package-sidebar__mobile-travelers">

          <label htmlFor="mobile-package-person-count">
            Select Travelers
          </label>

          <select
            id="mobile-package-person-count"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            {pricing.perPerson?.map((item) => (
              <option
                key={item.people}
                value={String(item.people)}
              >
                {item.people} {item.people === 1 ? "Person" : "Persons"}
              </option>
            ))}

            {pricing.group !== undefined && (
              <option value="group">Group</option>
            )}
          </select>

        </div>

        {/* Additional Travelers Field */}
        {(selectedOption === "group") && (
          <div className="package-sidebar__mobile-custom-travelers">

            <label htmlFor="mobile-custom-travelers">
              Number of Travelers
            </label>

            <input
              id="mobile-custom-travelers"
              type="number"
              step="1"
              value={customTravelers}
              onChange={(e) => setCustomTravelers(e.target.value)}
              placeholder="Enter travelers"
            />

          </div>
        )}

        {/* Booking Message */}
        <div className="package-sidebar__booking-message">
          <i className="bi bi-check-circle-fill"></i>
          <strong>
            Book your package with just ₹999
          </strong>
        </div>

        {/* Bottom Price and Book Button */}
        <div className="package-sidebar__bottom-bar">

          <div className="package-sidebar__bottom-price">

            <span className="package-sidebar__mobile-per-person">
              ₹{formatPrice(currentPrice)} / person
            </span>

            <strong>
              ₹{formatPrice(totalAmount)}
            </strong>

            <span>Total Package Amount</span>

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
