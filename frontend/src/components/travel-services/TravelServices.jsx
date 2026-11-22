
import { useNavigate } from "react-router-dom";
import cabImage from "../../assets/travel/cab.png";
import hotelImage from "../../assets/travel/hotel.png";
import holidayImage from "../../assets/travel/holidays.png";
import "./TravelServices.scss";

const services = [
  {
    id: 1,
    title: "Cabs",
    subtitle: "Up to 10% Off*",
    images: cabImage,
    className: "flights",
    path: "/cabs",
  },
  {
    id: 2,
    title: "Hotels",
    subtitle: "Up to 20% Off*",
    images: hotelImage,
    className: "hotels",
    path: "/hotels",
  },
  {
    id: 3,
    title: "Holidays",
    subtitle: "",
    images: holidayImage,
    className: "trains",
    path: "/packages",
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
                <img 
                  src={service.images}
                  className="travel-services__image"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TravelServices;
