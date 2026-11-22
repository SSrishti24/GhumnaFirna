
import { useState } from "react";
import "./HotelFilters.scss";

function HotelFilters({
  hotels,
  filters,
  onFilterChange,
  onReset,
}) {
  const [search, setSearch] = useState("");

  const [openSections, setOpenSections] = useState({
    destinations: true,
    budget: true,
  });

  const destinations = [
    ...new Set(hotels.map((hotel) => hotel.location)),
  ];

  const budgetOptions = [
    { label: "Under ₹5,000", value: "under5000" },
    { label: "₹5,000 - ₹10,000", value: "5000to10000" },
    { label: "₹10,000 - ₹15,000", value: "10000to15000" },
    { label: "₹15,000 - ₹20,000", value: "15000to20000" },
    { label: "Above ₹20,000", value: "above20000" },
  ];

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleFilter = (key, value) => {
    const currentValues = filters[key];

    const updatedValues = currentValues.includes(value)
      ? currentValues.filter((item) => item !== value)
      : [...currentValues, value];

    onFilterChange(key, updatedValues);
  };

  const getCount = (destination) =>
    hotels.filter((hotel) => hotel.location === destination).length;

  return (
    <aside className="hotel-filters">

      {/* Header */}
      <div className="hotel-filters__header">
        <h3>Filter By</h3>

        <button type="button" onClick={onReset}>
          Reset All
        </button>
      </div>

      {/* Popular Destinations */}
      <div className="hotel-filters__section">
        <button
          type="button"
          className="hotel-filters__section-title"
          onClick={() => toggleSection("destinations")}
        >
          Popular Destinations

          <i
            className={`bi bi-chevron-down ${
              openSections.destinations ? "open" : ""
            }`}
          ></i>
        </button>

        {openSections.destinations && (
          <div className="hotel-filters__section-content">

            <div className="hotel-filters__search">
              <input
                type="text"
                placeholder="Search your destination"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <i className="bi bi-search"></i>
            </div>

            {destinations
              .filter((destination) =>
                destination.toLowerCase().includes(search.toLowerCase())
              )
              .map((destination) => (
                <label
                  className="hotel-filters__option"
                  key={destination}
                >
                  <input
                    type="checkbox"
                    checked={filters.destinations.includes(destination)}
                    onChange={() =>
                      toggleFilter("destinations", destination)
                    }
                  />

                  <span>{destination}</span>

                  <small>{getCount(destination)}</small>
                </label>
              ))}
          </div>
        )}
      </div>

      {/* Budget */}
      <div className="hotel-filters__section">
        <button
          type="button"
          className="hotel-filters__section-title"
          onClick={() => toggleSection("budget")}
        >
          Budget (per night)

          <i
            className={`bi bi-chevron-down ${
              openSections.budget ? "open" : ""
            }`}
          ></i>
        </button>

        {openSections.budget && (
          <div className="hotel-filters__section-content">

            {budgetOptions.map((option) => (
              <label
                className="hotel-filters__option"
                key={option.value}
              >
                <input
                  type="checkbox"
                  checked={filters.budgets.includes(option.value)}
                  onChange={() =>
                    toggleFilter("budgets", option.value)
                  }
                />

                <span>{option.label}</span>
              </label>
            ))}

          </div>
        )}
      </div>

    </aside>
  );
}

export default HotelFilters;
