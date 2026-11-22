
import { useNavigate } from "react-router-dom";
import { FaPlane, FaHotel, FaTrain } from "react-icons/fa";
import "./TravelServices.scss";

const services = [
  {
    id: 1,
    title: "Flights",
    subtitle: "",
    icon: <FaPlane />,
    className: "flights",
    path: "/flights",
  },
  {
    id: 2,
    title: "Hotels",
    subtitle: "Up to 70% Off*",
    icon: <FaHotel />,
    className: "hotels",
    path: "/hotels",
  },
  {
    id: 3,
    title: "Trains",
    subtitle: "",
    icon: <FaTrain />,
    className: "trains",
    path: "/trains",
  },
];

function TravelServices() {
  const navigate = useNavigate();

  return (
    <section className="travel-services">
      <div className="travel-services__container">
        {services.map((service) => (
          <div
            className={`travel-services__card ${service.className}`}
            key={service.id}
            onClick={() => navigate(service.path)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                navigate(service.path);
              }
            }}
          >
            <div className="travel-services__content">
              <h3>{service.title}</h3>

              {service.subtitle && (
                <p>{service.subtitle}</p>
              )}
            </div>

            <div className="travel-services__illustration">
              <div className="travel-services__circle">
                {service.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TravelServices;
