
import { useNavigate } from "react-router-dom";

import DarshanCard from "../darshan-card/DarshanCard";
import { darshanData } from "../../data/darshanData";

import "./PopularDarshan.scss";

function PopularDarshan() {
  const navigate = useNavigate();

  return (
    <section className="popular-darshan">
      <div className="popular-darshan__container">

        <div className="popular-darshan__header">
          <h2>Popular Darshan <span>Packages</span></h2>

          <button
            onClick={() => navigate("/darshan")}
            className="popular-darshan__view-all"
          >
            View All
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        <div className="popular-darshan__grid">
          {darshanData.slice(0, 4).map((item) => (
            <DarshanCard
              key={item.id}
              darshan={item}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default PopularDarshan;
