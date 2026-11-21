
import {
  FiHeadphones,
  FiShield,
  FiRefreshCw,
  FiUsers,
  FiHeart,
} from "react-icons/fi";

import "./WhyBookUs.scss";

const features = [
  {
    id: 1,
    icon: <FiHeadphones />,
    title: "Customer Support",
    description: "We're here to help you whenever you need us.",
  },
  {
    id: 2,
    icon: <FiShield />,
    title: "Secure Booking",
    description: "Your booking details are handled with care and security.",
  },
  {
    id: 3,
    icon: <FiRefreshCw />,
    title: "Easy Booking Assistance",
    description: "Get assistance throughout your travel booking journey.",
  },
  {
    id: 4,
    icon: <FiUsers />,
    title: "Trusted Travel Planning",
    description: "Plan your trips with confidence and convenience.",
  },
  // {
  //   id: 5,
  //   icon: <FiHeart />,
  //   title: "Memorable Journeys",
  //   description: "Discover amazing destinations and create beautiful memories.",
  // },
];

function WhyBookUs() {
  return (
    <section className="why-book-us">
      <div className="why-book-us__container">

        <h2 className="why-book-us__heading">
          Why Book With Us?
        </h2>

        <div className="why-book-us__list">
          {features.map((feature) => (
            <div className="why-book-us__item" key={feature.id}>

              <div className="why-book-us__icon">
                {feature.icon}
              </div>

              <div className="why-book-us__content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyBookUs;
