function HotelSort({ sortBy, onSortChange }) {
  return (
    <div className="hotel-sort">
      <i className="bi bi-arrow-down-up"></i>

      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        aria-label="Sort hotels"
      >
        <option value="recommended">Recommended</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Guest Rating</option>
        <option value="name">Hotel Name</option>
      </select>
    </div>
  );
}

export default HotelSort;