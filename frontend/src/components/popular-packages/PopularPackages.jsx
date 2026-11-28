
import { useNavigate } from "react-router-dom";
import PackageCard from "../package-card/PackageCard";
import { packagesData } from "../../data/packagesData";

import "./PopularPackages.scss";

function PopularPackages() {
  const navigate = useNavigate();

  return (
    <section className="popular-packages">
      <div className="popular-packages__container">

        <div className="popular-packages__header">
          <h2>Our Popular <span>Packages</span></h2>

          <button
            onClick={() => navigate("/packages")}
            className="popular-packages__view-all"
          >
            View All
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        <div className="popular-packages__grid">
          {packagesData.slice(0, 4).map((item) => (
            <PackageCard
              key={item.id}
              packageData={item}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default PopularPackages;
