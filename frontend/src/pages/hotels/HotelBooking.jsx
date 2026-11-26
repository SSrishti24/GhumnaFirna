
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "../../components/navbar/Navbar";

import BookingHotelSummary from "../../components/hotels/booking/BookingHotelSummary";
import BookingRoomDetails from "../../components/hotels/booking/BookingRoomDetails";
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

  // Booking details validation
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
      </>
    );
  }

  // Format booking information for Contact Us description
  const handleSubmit = (event) => {
    event.preventDefault();

    const guestsInformation = guestDetails
      .map((guest, index) => {
        return `
Guest ${index + 1}:
Title: ${guest.title}
Name: ${guest.firstName} ${guest.lastName}
        `.trim();
      })
      .join("\n\n");

    const hotelDescription = `
      HOTEL BOOKING INQUIRY

      HOTEL DETAILS
      Hotel Name: ${hotel.name}
      Hotel Location: ${hotel.location || hotel.address || "N/A"}

      ROOM DETAILS
      Room Name: ${selectedRoom.name}
      Bed Type: ${selectedRoom.bedType || "N/A"}

      TRAVEL DETAILS
      Check-in Date: ${bookingDetails.checkIn || "N/A"}
      Check-out Date: ${bookingDetails.checkOut || "N/A"}
      Total Nights: ${bookingDetails.nights || 0}
      Total Rooms: ${bookingDetails.rooms || 1}
      Adults: ${bookingDetails.adults || 0}
      Children: ${bookingDetails.children || 0}
      Total Guests: ${bookingDetails.totalGuests || 0}

      PRICE DETAILS
      Price Per Room / Night: ₹${Number(
        selectedRoom.price || 0
      ).toLocaleString("en-IN")}
      Total Rooms: ${bookingDetails.rooms || 1}
      Total Nights: ${bookingDetails.nights || 0}
      Room Total: ₹${Number(
        (selectedRoom.price || 0) *
        (bookingDetails.rooms || 1) *
        (bookingDetails.nights || 0)
      ).toLocaleString("en-IN")}
      Taxes & Extra Charges: ₹${Number(
        priceBreakup.grandTotal -
        (
          (selectedRoom.price || 0) *
          (bookingDetails.rooms || 1) *
          (bookingDetails.nights || 0)
        )
      ).toLocaleString("en-IN")}
      Grand Total: ₹${Number(
        priceBreakup.grandTotal || 0
      ).toLocaleString("en-IN")}

      Please contact me regarding this hotel booking.
    `.trim();

    // Send all details to Contact Us page
    navigate("/about-us#contact-form", {
      state: {
        category: "Hotel",
        description: hotelDescription,

        hotel,
        selectedRoom,
        bookingDetails,
        guestDetails,
        contactDetails,
        priceBreakup,

        totalAmount: priceBreakup.grandTotal,
      },
    });
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
            {bookingDetails.rooms} Room
            {bookingDetails.rooms > 1 ? "s" : ""} |{" "}
            {bookingDetails.nights} Night
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
            document
              .getElementById("hotel-booking-form")
              ?.requestSubmit()
          }
        >
          Continue Booking
        </button>
      </div>

    </>
  );
}

export default HotelBooking;
