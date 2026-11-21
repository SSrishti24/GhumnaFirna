import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import CabBookingForm from "../../components/cab-booking/CabBookingForm";
import AvailableCabs from "../../components/available-cabs/AvailableCabs";
import cabBanner from "../../assets/cabs/cab-banner.png";
import TravelCategories from "../../components/travel-categories/TravelCategories";

import "./Cabs.scss";

function Cabs() {
  return (
    <>
      <Navbar />

      <div className="mobile-travel-categories">
        <TravelCategories />
      </div>

      <main className="cabs-page">
        <div className="cabs-page__heading">
          <h1>Book Your Ride</h1>
          <p>
            Comfortable rides, flexible travel options and easy cab booking.
          </p>
        </div>

        <div id="cab-booking-form">
          <CabBookingForm />
        </div>

        {/* Promotional Banner */}
        <div className="cabs-page__banner">
            <img
                src={cabBanner}
                alt="Ghumna Firna - Your Travel Partner for Cabs, Packages and Darshan"
            />
        </div>

        <AvailableCabs />
      </main>

      <Footer />
    </>
  );
}

export default Cabs;