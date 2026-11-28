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
      <title>Cab Booking & Taxi Services in India | GhumnaFirna</title>

      <meta
        name="description"
        content="Book comfortable cabs and taxi services with GhumnaFirna. Explore convenient travel options for local sightseeing, outstation trips and holiday journeys."
      />

      <link
        rel="canonical"
        href="https://ghumnafirna.com/cabs"
      />

      <meta
        property="og:title"
        content="Cab Booking & Taxi Services | GhumnaFirna"
      />

      <meta
        property="og:description"
        content="Find convenient cab and taxi options for your next journey with GhumnaFirna."
      />

      <meta
        property="og:url"
        content="https://ghumnafirna.com/cabs"
      />

      <meta property="og:type" content="website" />

      <Navbar />

      <div className="mobile-travel-categories">
        <TravelCategories />
      </div>

      <main className="cabs-page">
        <div className="cabs-page__heading">
          <h1>Book Your <span>Ride</span></h1>
          <p>
            Flexible travel options and easy cab booking.
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