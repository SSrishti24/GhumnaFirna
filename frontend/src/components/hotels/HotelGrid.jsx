import HotelCard from "./HotelCard";
import "./HotelGrid.scss";

function HotelGrid({ hotels }) {
  if (hotels.length === 0) {
    return (
      <div className="hotel-grid__empty">
        <i className="bi bi-building"></i>
        <h3>No Hotels Found</h3>
        <p>Try changing your filters to find more hotels.</p>
      </div>
    );
  }

  return (
    <div className="hotel-grid">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}

export default HotelGrid;