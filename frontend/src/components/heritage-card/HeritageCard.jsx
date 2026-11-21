import { useNavigate } from "react-router-dom";
import "./HeritageCard.scss";

function HeritageCard({ heritage }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/heritages/${heritage.id}`);
  };

  return (
    <article
      className="heritage-card"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <div className="heritage-card__image">
        <img src={heritage.image} alt={heritage.title} />
      </div>

      <div className="heritage-card__content">
        <div className="heritage-card__info">
          <h3>{heritage.name}</h3>
          <p>{heritage.description}</p>
        </div>

        <span className="heritage-card__arrow">
          <i className="bi bi-arrow-right"></i>
        </span>
      </div>
    </article>
  );
}

export default HeritageCard;