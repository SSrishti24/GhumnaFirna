function BookingRoomDetails({ room, hotel }) {
  const inclusions = room.inclusions || [
    "Free Wi-Fi",
    "Complimentary packaged water",
    "Tea/Coffee maker",
    "Breakfast not included",
  ];

  return (
    <section className="booking-room-details">
      <div className="booking-room-details__heading">
        <h3>Room Type: {room.name}</h3>
        <span>Selected Room</span>
      </div>

      <div className="booking-room-details__body">
        <h4>Inclusions:</h4>

        <ul>
          {inclusions.map((item, index) => (
            <li key={index}>
              <i className="bi bi-check-circle-fill"></i>
              {item}
            </li>
          ))}
        </ul>

        <div className="booking-room-details__cancellation">
          <strong>Cancellation Policy:</strong>
          <p>
            {room.cancellationPolicy ||
              hotel.cancellationPolicy ||
              "Please check the cancellation policy before booking."}
          </p>
        </div>
      </div>
    </section>
  );
}

export default BookingRoomDetails;