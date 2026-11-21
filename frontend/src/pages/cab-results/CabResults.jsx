import { useLocation, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import CabResultCard from "../../components/cab-result-card/CabResultCard";

import { cabResultsData } from "../../data/cabResultsData";

import "./CabResults.scss";

function CabResults() {
  const location = useLocation();
  const searchData = location.state;
  const navigate = useNavigate();

  const tripLabels = {
    airport: "Airport Transfer",
    outstation: "Outstation Trip",
    hourly: "Hourly Rental",
  };

  return (
    <>
      <Navbar />

      <main className="cab-results">
        <div className="cab-results__container">

            <div className="cab-results__heading">
            <div>
                <h1>Available Cabs</h1>
                <p>Choose the right cab for your journey.</p>
            </div>

            <button
                type="button"
                className="cab-results__back"
                onClick={() => navigate("/cabs")}
            >
                <i className="bi bi-arrow-left"></i>
                Back to Cabs
            </button>
            </div>

          {/* Search Summary */}
          {searchData && (
          <div className="cab-results__summary">
            <div>
              <span>Trip Type</span>
              <strong>{tripLabels[searchData.tripType]}</strong>
            </div>

            <div>
              <span>Pickup Location</span>
              <strong>{searchData.pickup}</strong>
            </div>

            {searchData.tripType !== "hourly" && (
              <div>
                <span>Drop Location</span>
                <strong>{searchData.drop}</strong>
              </div>
            )}

            <div>
              <span>Departure</span>
              <strong>
                {new Date(searchData.pickupDateTime).toLocaleString("en-IN")}
              </strong>
            </div>

            {searchData.returnTrip && (
              <div>
                <span>Return</span>
                <strong>
                  {new Date(searchData.returnDateTime).toLocaleString("en-IN")}
                </strong>
              </div>
            )}
          </div>
          )}


          <div className="cab-results__count">
            <h2>{cabResultsData.length} Cabs Available</h2>
            <span>All available options</span>
          </div>

          {/* Cab Cards */}
          <div className="cab-results__list">
            {cabResultsData.map((cab) => (
                <CabResultCard
                    key={cab.id}
                    cab={cab}
                    searchData={searchData || null}
                />
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default CabResults;