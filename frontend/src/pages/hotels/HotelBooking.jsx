
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "../../components/navbar/Navbar";
// import Footer from "../../components/footer/Footer";

import BookingHotelSummary from "../../components/hotels/booking/BookingHotelSummary";
import BookingRoomDetails from "../../components/hotels/booking/BookingRoomDetails";
import GuestDetailsForm from "../../components/hotels/booking/GuestDetailsForm";
import RoomPriceDetails from "../../components/hotels/booking/RoomPriceDetails";

import "./HotelBooking.scss";

function HotelBooking() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    hotel,
    selectedRoom,
    bookingDetails,
    priceBreakup,
  } = location.state || {};

  const [guestDetails, setGuestDetails] = useState(
    Array.from(
      { length: bookingDetails?.adults || 1 },
      () => ({
        title: "Mr.",
        firstName: "",
        lastName: "",
      })
    )
  );

  const [contactDetails, setContactDetails] = useState({
    email: "",
    phone: "",
  });

  if (!hotel || !selectedRoom || !bookingDetails || !priceBreakup) {
    return (
      <>
        <Navbar />

        <div className="hotel-booking__error">
          <h2>Booking Details Not Found</h2>
          <p>Please select your hotel and room again.</p>

          <button onClick={() => navigate("/hotels")}>
            Explore Hotels
          </button>
        </div>

        <Footer />
      </>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (contactDetails.phone.length !== 10) {
      alert("Please enter a valid 10 digit mobile number.");
      return;
    }

    const bookingPayload = {
      hotel,
      selectedRoom,
      bookingDetails,
      guestDetails,
      contactDetails,
      priceBreakup,
    };

    console.log("Hotel Booking Details:", bookingPayload);

    // Next step: connect this payload to your inquiry / booking API.
  };

  return (
    <>
      <Navbar />

      <main className="hotel-booking">
        <div className="hotel-booking__container">

          <form id="hotel-booking-form" onSubmit={handleSubmit}>
            <div className="hotel-booking__layout">

              {/* Left Section */}
              <div className="hotel-booking__main">

                <BookingHotelSummary
                  hotel={hotel}
                  bookingDetails={bookingDetails}
                />

                <BookingRoomDetails
                  room={selectedRoom}
                  hotel={hotel}
                />

                <GuestDetailsForm
                  adults={bookingDetails.adults}
                  guestDetails={guestDetails}
                  setGuestDetails={setGuestDetails}
                  contactDetails={contactDetails}
                  setContactDetails={setContactDetails}
                />

              </div>

              {/* Right Section */}
              <aside className="hotel-booking__sidebar">
                <RoomPriceDetails
                  priceBreakup={priceBreakup}
                  bookingDetails={bookingDetails}
                />
              </aside>

            </div>

            {/* Desktop Submit */}
            <div className="hotel-booking__submit">
              <button type="submit">
                Continue Booking
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>

          </form>
        </div>
      </main>

      {/* Mobile Bottom Bar */}
      <div className="hotel-booking__mobile-bar">
        <div>
          <small>
            {bookingDetails.rooms} Room | {bookingDetails.nights} Night
            {bookingDetails.nights > 1 ? "s" : ""} |{" "}
            {bookingDetails.totalGuests} Guests
          </small>

          <strong>
            ₹{Number(priceBreakup.grandTotal).toLocaleString("en-IN")}
          </strong>
        </div>

        <button
            type="button"
            onClick={() =>
                document.getElementById("hotel-booking-form")?.requestSubmit()
            }
            >
            Continue Booking
        </button>
      </div>

      <div id="hotel-booking-submit" hidden />

      {/* <Footer /> */}
    </>
  );
}

export default HotelBooking;
