
import { useMemo, useState } from "react";

import Navbar from "../../components/navbar/Navbar";
import TravelCategories from "../../components/travel-categories/TravelCategories";
import Footer from "../../components/footer/Footer";

import HotelFilters from "../../components/hotels/HotelFilters";
import HotelSort from "../../components/hotels/HotelSort";
import HotelGrid from "../../components/hotels/HotelGrid";

import { hotelsData } from "../../data/hotelsData";

import "./HotelsListing.scss";

const initialFilters = {
  destinations: [],
  budgets: [],
  ratings: [],
  amenities: [],
};

function HotelsListing() {
  const [filters, setFilters] = useState(initialFilters);
  const [sortBy, setSortBy] = useState("recommended");
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = (key, values) => {
    setFilters((prev) => ({
      ...prev,
      [key]: values,
    }));
  };

  const handleReset = () => {
    setFilters(initialFilters);
    setSortBy("recommended");
  };

  const filteredHotels = useMemo(() => {
    let result = hotelsData.filter((hotel) => {
      const destinationMatch =
        filters.destinations.length === 0 ||
        filters.destinations.includes(hotel.location);

      const budgetMatch =
        filters.budgets.length === 0 ||
        filters.budgets.some((budget) => {
          switch (budget) {
            case "under5000":
              return hotel.price < 5000;

            case "5000to10000":
              return hotel.price >= 5000 && hotel.price <= 10000;

            case "10000to15000":
              return hotel.price > 10000 && hotel.price <= 15000;

            case "15000to20000":
              return hotel.price > 15000 && hotel.price <= 20000;

            case "above20000":
              return hotel.price > 20000;

            default:
              return false;
          }
        });

      const ratingMatch =
        filters.ratings.length === 0 ||
        filters.ratings.some((rating) => hotel.rating >= rating);

      const amenitiesMatch =
        filters.amenities.length === 0 ||
        filters.amenities.every((amenity) =>
          hotel.amenities.includes(amenity)
        );

      return (
        destinationMatch &&
        budgetMatch &&
        ratingMatch &&
        amenitiesMatch
      );
    });

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;

      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;

      default:
        break;
    }

    return result;
  }, [filters, sortBy]);

  return (
    <>
      <Navbar />

      <div className="mobile-travel-categories">
        <TravelCategories />
      </div>

      <main className="hotels-listing">
        <div className="hotels-listing__container">

          {/* Mobile Filter Button */}
          <button
            className="hotels-listing__mobile-filter"
            type="button"
            onClick={() => setShowFilters(!showFilters)}
          >
            <i className="bi bi-sliders"></i>
            Filters
            <i
              className={`bi ${
                showFilters ? "bi-chevron-up" : "bi-chevron-down"
              }`}
            ></i>
          </button>

          <div className="hotels-listing__layout">

            {/* Sidebar */}
            <div
              className={`hotels-listing__sidebar ${
                showFilters ? "show" : ""
              }`}
            >
              <HotelFilters
                hotels={hotelsData}
                filters={filters}
                onFilterChange={handleFilterChange}
                onReset={handleReset}
              />
            </div>

            {/* Main Content */}
            <section className="hotels-listing__content">

              <div className="hotels-listing__header">
                <div>
                  <h1>Mount Hotels & Resorts in India</h1>

                  <p>
                    {filteredHotels.length} properties found across
                    India's top summit destinations
                  </p>
                </div>

                <HotelSort
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                />
              </div>

              <HotelGrid hotels={filteredHotels} />

            </section>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default HotelsListing;
