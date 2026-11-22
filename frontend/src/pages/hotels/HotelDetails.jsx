
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import HotelGallery from "../../components/hotels/details/HotelGallery";
import { hotelsData } from "../../data/hotelsData";

import "./HotelDetails.scss";

const getToday = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const getNights = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) return 1;

  const start = new Date(`${checkIn}T00:00:00`);
  const end = new Date(`${checkOut}T00:00:00`);

  return Math.max(
    1,
    Math.round((end - start) / (1000 * 60 * 60 * 24))
  );
};

const formatDate = (date) => {
  if (!date) return "";

  return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

function HotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const hotel = hotelsData.find(
    (item) => item.id === Number(id)
  );

  const [showDateForm, setShowDateForm] = useState(false);

  const [bookingData, setBookingData] = useState({
    checkIn: "",
    checkOut: "",
    adults: 2,
    children: 0,
    rooms: 1,
  });

  const [selectedRoom, setSelectedRoom] = useState(null);

  const today = getToday();

  const nights = getNights(
    bookingData.checkIn,
    bookingData.checkOut
  );

  const totalGuests =
    Number(bookingData.adults) + Number(bookingData.children);

  const updateBooking = (key, value) => {
    setBookingData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleCheckInChange = (value) => {
    setBookingData((prev) => {
      let checkOut = prev.checkOut;

      if (!checkOut || checkOut <= value) {
        const nextDay = new Date(`${value}T00:00:00`);
        nextDay.setDate(nextDay.getDate() + 1);

        const year = nextDay.getFullYear();
        const month = String(nextDay.getMonth() + 1).padStart(2, "0");
        const day = String(nextDay.getDate()).padStart(2, "0");

        checkOut = `${year}-${month}-${day}`;
      }

      return {
        ...prev,
        checkIn: value,
        checkOut,
      };
    });
  };

  const handleDateSubmit = (event) => {
    event.preventDefault();

    if (
      !bookingData.checkIn ||
      !bookingData.checkOut ||
      bookingData.checkOut <= bookingData.checkIn
    ) {
      return;
    }

    setShowDateForm(false);

    // Agar room pehle select ho chuka hai
    if (selectedRoom) {
      goToBooking(selectedRoom);
      return;
    }

    // Agar pehle dates select ki hain,
    // toh user ko room selection par le jao
    setTimeout(() => {
      document.getElementById("hotel-rooms")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const goToBooking = (room) => {
    const roomPrice = room.price * nights * bookingData.rooms;
    const taxes = (hotel.taxes || 0) * nights * bookingData.rooms;

    navigate(`/hotels/${hotel.id}/booking`, {
      state: {
        hotel,
        selectedRoom: room,
        bookingDetails: {
          ...bookingData,
          nights,
          totalGuests,
        },
        priceBreakup: {
          roomPrice,
          discount: 0,
          taxes,
          grandTotal: roomPrice + taxes,
        },
      },
    });
  };

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  const handleBookingAction = () => {
    if (!bookingData.checkIn || !bookingData.checkOut) {
      setShowDateForm(true);
      return;
    }

    if (!selectedRoom) {
      document.getElementById("hotel-rooms")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    goToBooking(selectedRoom);
  };

  if (!hotel) {
    return (
      <>
        <Navbar />

        <main className="hotel-details__not-found">
          <i className="bi bi-building"></i>
          <h2>Hotel Not Found</h2>
          <p>The hotel you are looking for is not available.</p>

          <Link to="/hotels">Explore Hotels</Link>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="hotel-details">
        <div className="hotel-details__container">

          {/* Breadcrumb */}
          <div className="hotel-details__breadcrumb">
            <Link to="/">Home</Link>
            <i className="bi bi-chevron-right"></i>

            <Link to="/hotels">Hotels</Link>
            <i className="bi bi-chevron-right"></i>

            <span>{hotel.name}</span>
          </div>

          {/* Hotel Heading */}
          <div className="hotel-details__heading">
            <div>
              <div className="hotel-details__title-row">
                <h1>{hotel.name}</h1>

                <span className="hotel-details__category">
                  {hotel.category}
                </span>
              </div>

              <div className="hotel-details__address">
                <i className="bi bi-geo-alt-fill"></i>
                {hotel.address}
              </div>
            </div>

            <div className="hotel-details__rating">
              <span className="hotel-details__stars">
                {"★".repeat(Math.round(hotel.rating))}
              </span>

              <strong>{hotel.rating.toFixed(1)}</strong>
              <small>{hotel.reviews} reviews</small>
            </div>
          </div>

          {/* Main Layout */}
          <div className="hotel-details__layout">

            {/* Left Content */}
            <div className="hotel-details__main">

              {/* Gallery */}
              <HotelGallery hotel={hotel} />

              {/* Overview */}
              <section className="hotel-details__section">
                <h2>Hotel Overview</h2>
                <p>{hotel.overview || hotel.description}</p>
              </section>

              {/* Amenities */}
              <section className="hotel-details__section">
                <h2>Popular Amenities</h2>

                <div className="hotel-details__amenities">
                  {hotel.amenities?.map((amenity) => (
                    <div
                      className="hotel-details__amenity"
                      key={amenity}
                    >
                      <i className="bi bi-check-circle-fill"></i>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Cancellation Policy */}
              <section className="hotel-details__section">
                <h2>Cancellation Policy</h2>

                <div className="hotel-details__policy">
                  <i className="bi bi-check-circle"></i>
                  <p>{hotel.cancellationPolicy}</p>
                </div>

                <div className="hotel-details__check-times">
                  <div>
                    <span>Check-in</span>
                    <strong>{hotel.checkInTime || "02:00 PM"}</strong>
                  </div>

                  <div>
                    <span>Check-out</span>
                    <strong>{hotel.checkOutTime || "12:00 PM"}</strong>
                  </div>
                </div>
              </section>

              {/* Rooms */}
              <section
                id="hotel-rooms"
                className="hotel-details__rooms"
              >
                <div className="hotel-details__rooms-heading">
                  <div>
                    <h2>Choose Your Room</h2>
                    <p>
                      Select a room according to your preference.
                    </p>
                  </div>

                  {bookingData.checkIn && bookingData.checkOut && (
                    <button
                      type="button"
                      onClick={() => setShowDateForm(true)}
                    >
                      <i className="bi bi-calendar3"></i>
                      Modify Dates
                    </button>
                  )}
                </div>

                {bookingData.checkIn && bookingData.checkOut && (
                  <div className="hotel-details__selected-dates">
                    <i className="bi bi-calendar-check"></i>

                    <span>
                      {formatDate(bookingData.checkIn)} -{" "}
                      {formatDate(bookingData.checkOut)}
                    </span>

                    <span>
                      {nights} {nights === 1 ? "Night" : "Nights"}
                    </span>

                    <span>
                      {bookingData.rooms}{" "}
                      {bookingData.rooms === 1 ? "Room" : "Rooms"}
                    </span>

                    <span>{totalGuests} Guests</span>
                  </div>
                )}

                <div className="hotel-details__room-list">
                  {hotel.rooms?.map((room) => {
                    const roomTotal =
                      room.price * nights * bookingData.rooms;

                    return (
                      <article
                        className={`hotel-room ${
                          selectedRoom?.id === room.id ? "hotel-room--selected" : ""
                        }`}
                        key={room.id}
                      >
                        <div className="hotel-room__image">
                          <img src={room.image} alt={room.name} />
                        </div>

                        <div className="hotel-room__content">
                          <div className="hotel-room__info">
                            <h3>{room.name}</h3>

                            <span className="hotel-room__bed">
                              <i className="bi bi-moon-stars"></i>
                              {room.bedType}
                            </span>

                            <span className="hotel-room__guests">
                              <i className="bi bi-people"></i>
                              Up to {room.maxGuests} guests
                            </span>

                            <p>{room.description}</p>

                            <div className="hotel-room__amenities">
                              {room.amenities.slice(0, 4).map((item) => (
                                <span key={item}>{item}</span>
                              ))}
                            </div>
                          </div>

                          <div className="hotel-room__booking">
                            <div className="hotel-room__price">
                              <del>
                                ₹{room.originalPrice.toLocaleString("en-IN")}
                              </del>

                              <strong>
                                ₹{room.price.toLocaleString("en-IN")}
                              </strong>

                              <small>per night / room</small>
                            </div>

                            {bookingData.checkIn && (
                              <div className="hotel-room__total">
                                Total: ₹{roomTotal.toLocaleString("en-IN")}
                              </div>
                            )}

                            <button
                              type="button"
                              className={selectedRoom?.id === room.id ? "selected" : ""}
                              onClick={() => handleRoomSelect(room)}
                            >
                              {selectedRoom?.id === room.id ? "Selected ✓" : "Select Room"}
                            </button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            </div>

            {/* Desktop Booking Sidebar */}
            <aside className="hotel-details__sidebar">
              <div className="hotel-details__booking-card">
                <span className="hotel-details__deal">
                  <i className="bi bi-check-circle-fill"></i>
                  Special Deal
                </span>

                <h3>Book Your Stay</h3>

                <p>Comfortable rooms at the best available price.</p>

                <div className="hotel-details__starting-price">
                  <span>Starting from</span>

                  <strong>
                    ₹{hotel.price.toLocaleString("en-IN")}
                  </strong>

                  <small>Per night / room</small>
                </div>

                <div className="hotel-details__booking-benefit">
                  <i className="bi bi-check-circle-fill"></i>
                  Free cancellation*
                </div>

                <div className="hotel-details__booking-benefit">
                  <i className="bi bi-check-circle-fill"></i>
                  Secure booking
                </div>

                <button
                  type="button"
                  onClick={handleBookingAction}
                >
                  {!bookingData.checkIn
                    ? selectedRoom
                      ? "Choose Date"
                      : "Choose Date"
                    : "Choose Room"}

                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </aside>

          </div>
        </div>
      </main>

      {/* Mobile Sticky Booking Bar */}
      <div className="hotel-details__mobile-bar">
        <div>
          <small>Starting from</small>
          <strong>
            ₹{(selectedRoom?.price || hotel.price).toLocaleString("en-IN")}
          </strong>
          <span>Per night / room</span>
        </div>

        <button
          type="button"
          onClick={handleBookingAction}
        >
          {!bookingData.checkIn ? "Choose Date" : "Choose Room"}
        </button>
      </div>

      {/* Date & Guests Modal */}
      {showDateForm && (
        <div
          className="hotel-date-modal"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setShowDateForm(false);
            }
          }}
        >
          <form
            className="hotel-date-modal__content"
            onSubmit={handleDateSubmit}
          >
            <div className="hotel-date-modal__header">
              <div>
                <h2>Travel Dates & Guests</h2>
                <p>{hotel.name}</p>
              </div>

              <button
                type="button"
                onClick={() => setShowDateForm(false)}
                aria-label="Close"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            <div className="hotel-date-modal__dates">
              <label>
                <span>Check-in</span>

                <input
                  type="date"
                  min={today}
                  required
                  value={bookingData.checkIn}
                  onChange={(e) =>
                    handleCheckInChange(e.target.value)
                  }
                />
              </label>

              <label>
                <span>Check-out</span>

                <input
                  type="date"
                  min={bookingData.checkIn || today}
                  required
                  value={bookingData.checkOut}
                  onChange={(e) =>
                    updateBooking("checkOut", e.target.value)
                  }
                />
              </label>
            </div>

            <div className="hotel-date-modal__guest-row">
              <div>
                <strong>Rooms</strong>
                <small>Number of rooms</small>
              </div>

              <div className="hotel-date-modal__counter">
                <button
                  type="button"
                  disabled={bookingData.rooms <= 1}
                  onClick={() =>
                    updateBooking(
                      "rooms",
                      Math.max(1, bookingData.rooms - 1)
                    )
                  }
                >
                  −
                </button>

                <strong>{bookingData.rooms}</strong>

                <button
                  type="button"
                  disabled={bookingData.rooms >= 10}
                  onClick={() =>
                    updateBooking(
                      "rooms",
                      Math.min(10, bookingData.rooms + 1)
                    )
                  }
                >
                  +
                </button>
              </div>
            </div>

            <div className="hotel-date-modal__guest-row">
              <div>
                <strong>Adults</strong>
                <small>Age 13 years and above</small>
              </div>

              <div className="hotel-date-modal__counter">
                <button
                  type="button"
                  disabled={bookingData.adults <= 1}
                  onClick={() =>
                    updateBooking(
                      "adults",
                      Math.max(1, bookingData.adults - 1)
                    )
                  }
                >
                  −
                </button>

                <strong>{bookingData.adults}</strong>

                <button
                  type="button"
                  disabled={bookingData.adults >= 20}
                  onClick={() =>
                    updateBooking(
                      "adults",
                      Math.min(20, bookingData.adults + 1)
                    )
                  }
                >
                  +
                </button>
              </div>
            </div>

            <div className="hotel-date-modal__guest-row">
              <div>
                <strong>Children</strong>
                <small>Age below 13 years</small>
              </div>

              <div className="hotel-date-modal__counter">
                <button
                  type="button"
                  disabled={bookingData.children <= 0}
                  onClick={() =>
                    updateBooking(
                      "children",
                      Math.max(0, bookingData.children - 1)
                    )
                  }
                >
                  −
                </button>

                <strong>{bookingData.children}</strong>

                <button
                  type="button"
                  disabled={bookingData.children >= 10}
                  onClick={() =>
                    updateBooking(
                      "children",
                      Math.min(10, bookingData.children + 1)
                    )
                  }
                >
                  +
                </button>
              </div>
            </div>

            <div className="hotel-date-modal__summary">
              <i className="bi bi-people"></i>
              {totalGuests} Guests · {bookingData.rooms}{" "}
              {bookingData.rooms === 1 ? "Room" : "Rooms"}
            </div>

            <button
              className="hotel-date-modal__submit"
              type="submit"
              disabled={
                !bookingData.checkIn ||
                !bookingData.checkOut ||
                bookingData.checkOut <= bookingData.checkIn
              }
            >
              Search Rooms
            </button>
          </form>
        </div>
      )}

      {/* <Footer /> */}
    </>
  );
}

export default HotelDetails;
