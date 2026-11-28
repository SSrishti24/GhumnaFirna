
import { useNavigate } from "react-router-dom";

import darshan from "../../assets/travel/darshan.png";
import packages from "../../assets/travel/packages.png";
import cab from "../../assets/travel/cabs.png";
import heritage from "../../assets/travel/haritages.png";
import "./TravelCategories.scss";

const categories = [
  {
    id: 1,
    title: "Darshan",
    images: darshan,
    path: "/darshan",
  },
  {
    id: 2,
    title: "Packages",
    images: packages,
    path: "/packages",
  },
  {
    id: 3,
    title: "Cabs",
    images: cab,
    path: "/cabs",
  },
  {
    id: 4,
    title: "Heritages",
    images: heritage,
    path: "/heritages",
    isNew: true,
  },
];

function TravelCategories() {
  const navigate = useNavigate();

  return (
    <section className="travel-categories">
      <div className="travel-categories__container">
        {categories.map((category) => (
          <div
            className="travel-categories__item"
            key={category.id}
            onClick={() => navigate(category.path)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                navigate(category.path);
              }
            }}
          >
            <div className="travel-categories__icon">
              <img 
                src={category.images} 
                className="travel-categories__images"
              />
            </div>

            <div className="travel-categories__title">
              {category.title}

              {/* {category.isNew && (
                <span className="new-badge">soon</span>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TravelCategories;
