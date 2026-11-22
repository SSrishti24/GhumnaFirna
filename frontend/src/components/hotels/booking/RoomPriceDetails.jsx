function RoomPriceDetails({ priceBreakup, bookingDetails }) {
  const formatPrice = (value) =>
    Number(value || 0).toLocaleString("en-IN");

  return (
    <section className="room-price-details">
      <div className="room-price-details__header">
        <i className="bi bi-currency-rupee"></i>
        <h3>Room Price Details</h3>
      </div>

      <div className="room-price-details__body">
        <div className="room-price-details__row">
          <span>
            {bookingDetails.rooms} Room
            {bookingDetails.rooms > 1 ? "s" : ""} ×{" "}
            {bookingDetails.nights} Night
            {bookingDetails.nights > 1 ? "s" : ""}
          </span>
          <strong>₹{formatPrice(priceBreakup.roomPrice)}</strong>
        </div>

        <div className="room-price-details__row room-price-details__discount">
          <span>Total Discount</span>
          <strong>
            - ₹{formatPrice(priceBreakup.discount)}
          </strong>
        </div>

        <div className="room-price-details__row">
          <span>Price After Discount</span>
          <strong>
            ₹
            {formatPrice(
              priceBreakup.roomPrice - priceBreakup.discount
            )}
          </strong>
        </div>

        <div className="room-price-details__row">
          <span>Taxes & Fees</span>
          <strong>₹{formatPrice(priceBreakup.taxes)}</strong>
        </div>

        <div className="room-price-details__total">
          <strong>Grand Total</strong>
          <strong>
            ₹{formatPrice(priceBreakup.grandTotal)}
          </strong>
        </div>
      </div>
    </section>
  );
}

export default RoomPriceDetails;