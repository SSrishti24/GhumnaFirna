
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { darshanData } from "../../data/darshanData";
import DarshanInformation from "../../components/darshan-information/DarshanInformation";

import "./DarshanDetails.scss";

function DarshanDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const darshan = darshanData.find(
    (item) => item.id === Number(id)
  );

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    adults: 1,
    children: 0,
    cab: "",
    stay: "",
  });

  const today = new Date();

  const minDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const totalPersons =
    Number(formData.adults) + Number(formData.children);

  const handleChange = (e) => {
    const { name, value } = e.target;

    let updatedValue = value;

    if (name === "adults") {
      updatedValue = Math.min(30, Math.max(1, Number(value)));
    } else if (name === "children") {
      updatedValue = Math.min(30, Math.max(0, Number(value)));
    }

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!darshan) return;

    const bookingDetails = {
      ...formData,
      adults: Number(formData.adults),
      children: Number(formData.children),
      totalPersons,
    };

    navigate("/inquiry", {
      state: {
        selectedDarshan: darshan,
        bookingDetails,
        totalAmount: darshan.price,
        totalPersons,
      },
    });
  };

  if (!darshan) {
    return (
      <>
        <Navbar />

        <div className="darshan-details__not-found">
          <h2>Darshan Package Not Found</h2>
          <button onClick={() => navigate("/darshan")}>
            Explore Darshan
          </button>
        </div>

        <Footer />
      </>
    );
  }

  const title = darshan.title || darshan.name;

  return (
    <>
      <Navbar />

      <main className="darshan-details">
        <div className="darshan-details__container">

          <div className="darshan-details__breadcrumb">
            <Link to="/">Home</Link>
            <i className="bi bi-chevron-right"></i>
            <Link to="/darshan">Darshan</Link>
            <i className="bi bi-chevron-right"></i>
            <span>{title}</span>
          </div>

          <div className="darshan-details__layout">

            <section className="darshan-details__left">
              <div className="darshan-details__image">
                <img src={darshan.image} alt={title} />
              </div>

              {/* Darshan Information */}
              <DarshanInformation darshan={darshan} />
            </section>

            <aside className="darshan-details__right">
              <div className="darshan-booking">

                <div className="darshan-booking__header">
                  <span>{title}</span>

                  <div className="darshan-booking__price">
                    <small>Starting from</small>
                    <strong>
                      ₹{darshan.price.toLocaleString("en-IN")}
                    </strong>
                  </div>
                </div>

                <form
                  className="darshan-booking__form"
                  onSubmit={handleSubmit}
                >

                  <div className="darshan-booking__row darshan-booking__row--two">
                    <div className="darshan-booking__field">
                      <label htmlFor="darshan-date">
                        Travel Date
                      </label>
                      <input
                        id="darshan-date"
                        type="date"
                        name="date"
                        min={minDate}
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="darshan-booking__field">
                      <label htmlFor="darshan-time">
                        Time Slot
                      </label>
                      <select
                        id="darshan-time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Time</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                      </select>
                    </div>
                  </div>

                  <div className="darshan-booking__row darshan-booking__row--three">
                    <div className="darshan-booking__field">
                      <label htmlFor="darshan-adults">Adults</label>
                      <input
                        id="darshan-adults"
                        type="number"
                        name="adults"
                        min="1"
                        max="30"
                        value={formData.adults}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="darshan-booking__field">
                      <label htmlFor="darshan-children">Children</label>
                      <input
                        id="darshan-children"
                        type="number"
                        name="children"
                        min="0"
                        max="30"
                        value={formData.children}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="darshan-booking__field">
                      <label>Total Persons</label>
                      <div className="darshan-booking__total">
                        {totalPersons}
                      </div>
                    </div>
                  </div>

                  <div className="darshan-booking__row darshan-booking__row--two">
                    <div className="darshan-booking__field">
                      <label htmlFor="darshan-cab">
                        Cab Requirement
                      </label>
                      <select
                        id="darshan-cab"
                        name="cab"
                        value={formData.cab}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Cab</option>
                        <option value="4 Seater">4 Seater</option>
                        <option value="6 Seater">6 Seater</option>
                        <option value="7 Seater">7 Seater</option>
                        <option value="12 Seater">12 Seater</option>
                        <option value="Not Required">Not Required</option>
                      </select>
                    </div>

                    <div className="darshan-booking__field">
                      <label>Do You Need Stay?</label>

                      <div className="darshan-booking__stay-options">
                        <label>
                          <input
                            type="radio"
                            name="stay"
                            value="Yes"
                            checked={formData.stay === "Yes"}
                            onChange={handleChange}
                            required
                          />
                          Yes
                        </label>

                        <label>
                          <input
                            type="radio"
                            name="stay"
                            value="No"
                            checked={formData.stay === "No"}
                            onChange={handleChange}
                          />
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="darshan-booking__submit"
                  >
                    Book Now
                    <i className="bi bi-arrow-right"></i>
                  </button>

                </form>
              </div>
            </aside>

          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default DarshanDetails;
