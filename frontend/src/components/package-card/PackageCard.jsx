
import { useNavigate } from "react-router-dom";
import "./PackageCard.scss";

function PackageCard({ packageData }) {
  const navigate = useNavigate();

  const handlePackageClick = () => {
    navigate(`/packages/${packageData.id}`);
  };

  return (
    <div
      className="package-card"
      onClick={handlePackageClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handlePackageClick();
        }
      }}
    >
      <img
        src={packageData.image}
        alt={packageData.title}
        className="package-card__image"
      />
      <div className="package-card__overlay">
        <span className="package-card__duration">
          {packageData.duration}
        </span>

      
        <h3>{packageData.title}</h3>

        <div className="package-card__price">
          ₹{packageData.price.toLocaleString("en-IN")}*
          <span>/ person</span>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;
