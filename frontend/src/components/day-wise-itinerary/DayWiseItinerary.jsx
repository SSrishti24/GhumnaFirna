
import { useState } from "react";
import "./DayWiseItinerary.scss";

function DayWiseItinerary({ itinerary = [] }) {
  const [openDays, setOpenDays] = useState([]);

  const toggleDay = (day) => {
    setOpenDays((prev) =>
      prev.includes(day)
        ? prev.filter((item) => item !== day)
        : [...prev, day]
    );
  };

  if (!itinerary.length) return null;

  return (
    <section className="day-itinerary">

      <h2 className="day-itinerary__heading">
        Day Wise Itinerary
      </h2>

      <div className="day-itinerary__list">

        {itinerary.map((item) => {
          const isOpen = openDays.includes(item.day);
          const contentId = `day-itinerary-content-${item.day}`;

          return (
            <div
              className={`day-itinerary__item ${
                isOpen ? "is-open" : ""
              }`}
              key={item.day}
            >

              {/* Day Number */}
              <div className="day-itinerary__timeline">
                <div className="day-itinerary__number">
                  <span>DAY</span>
                  <strong>{item.day}</strong>
                </div>
              </div>

              {/* Itinerary Card */}
              <div className="day-itinerary__card">

                {/* Card Header */}
                <button
                  type="button"
                  className="day-itinerary__toggle"
                  onClick={() => toggleDay(item.day)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <div className="day-itinerary__title">
                    <span>DAY {item.day} ITINERARY</span>

                    <h3>{item.title || `Day ${item.day}`}</h3>
                  </div>

                  <span className="day-itinerary__icon">
                    <i
                      className={`bi ${
                        isOpen ? "bi-dash-lg" : "bi-plus-lg"
                      }`}
                    ></i>
                  </span>
                </button>

                {/* Expandable Activities */}
                <div
                  id={contentId}
                  className={`day-itinerary__content-wrapper ${
                    isOpen ? "expanded" : ""
                  }`}
                  aria-hidden={!isOpen}
                >
                  <div className="day-itinerary__content">
                    <ul>
                      {item.activities?.map((activity, index) => (
                        <li key={index}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}

export default DayWiseItinerary;
