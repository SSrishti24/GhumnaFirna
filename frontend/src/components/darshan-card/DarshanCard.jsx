import { useNavigate } from "react-router-dom";
import "./DarshanCard.scss";

function DarshanCard({ darshan }) {
  const navigate = useNavigate();

  const openDetails = () => {
    navigate(`/darshan/${darshan.id}`);
  };

  return (
    <article
      className="darshan-card"
      onClick={openDetails}
      role="link"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter") openDetails();
      }}
    >
      <img
        src={darshan.image}
        alt={darshan.title || darshan.name}
        className="darshan-card__image"
      />

      <div className="darshan-card__overlay">
        <div className="darshan-card__info">
          <h3>{darshan.title || darshan.name}</h3>

          <p className="darshan-card__location">
            <i className="bi bi-geo-alt-fill"></i>
            {darshan.location}
          </p>

          <div className="darshan-card__footer">
            <div className="darshan-card__price">
              <strong>
                ₹{darshan.price?.toLocaleString("en-IN")}
              </strong>
              <span>Per Package</span>
            </div>

            <button
              type="button"
              className="darshan-card__book"
              onClick={(event) => {
                event.stopPropagation();
                openDetails();
              }}
            >
              Book Now
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default DarshanCard;