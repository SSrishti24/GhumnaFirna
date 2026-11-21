
import { useNavigate } from "react-router-dom";

import {
  FaBus,
  FaUmbrellaBeach,
  FaTaxi,
  FaLandmark,
} from "react-icons/fa";

import "./TravelCategories.scss";

const categories = [
  {
    id: 1,
    title: "Darshan",
    icon: <FaBus />,
    path: "/darshan",
  },
  {
    id: 2,
    title: "Packages",
    icon: <FaUmbrellaBeach />,
    path: "/packages",
  },
  {
    id: 3,
    title: "Cabs",
    icon: <FaTaxi />,
    path: "/cabs",
  },
  {
    id: 4,
    title: "Heritages",
    icon: <FaLandmark />,
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
              {category.icon}
            </div>

            <div className="travel-categories__title">
              {category.title}

              {category.isNew && (
                <span className="new-badge">NEW</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TravelCategories;
