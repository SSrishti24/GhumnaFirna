function BookingHotelSummary({ hotel, bookingDetails }) {
  const formatDate = (date) =>
    date
      ? new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      : "-";

  const nights = bookingDetails.nights || 1;

  return (
    <div className="booking-hotel-summary">
      <div className="booking-hotel-summary__heading">
        <div>
          <h2>{hotel.name}</h2>

          <div className="booking-hotel-summary__rating">
            <span>{"★".repeat(Math.round(hotel.rating || 0))}</span>
            <small>{hotel.rating || "N/A"}</small>
          </div>

          <p>
            <i className="bi bi-geo-alt"></i>
            {hotel.address || hotel.location}
          </p>
        </div>

        <button type="button" onClick={() => window.history.back()}>
          Change Hotel
        </button>
      </div>

      <div className="booking-hotel-summary__content">
        <img src={hotel.image} alt={hotel.name} />

        <div className="booking-hotel-summary__travel">
          <div>
            <span>Check-In</span>
            <strong>{formatDate(bookingDetails.checkIn)}</strong>
            <small>{hotel.checkInTime || "02:00 PM"}</small>
          </div>

          <div>
            <span>Check-Out</span>
            <strong>{formatDate(bookingDetails.checkOut)}</strong>
            <small>{hotel.checkOutTime || "12:00 PM"}</small>
          </div>

          <div>
            <span>Guest</span>
            <strong>{bookingDetails.adults} Adults</strong>
            <small>
              {bookingDetails.rooms} Room | {nights} Night
              {nights > 1 ? "s" : ""}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingHotelSummary;