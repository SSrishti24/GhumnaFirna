
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CabBookingForm.scss";

const initialFormData = {
  pickup: "",
  drop: "",
  pickupDateTime: "",
  returnDateTime: "",
  hours: "4",
};

function CabBookingForm() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("outstation");
  const [showReturn, setShowReturn] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  // Reset all fields whenever booking type changes
  const changeTab = (tab) => {
    setActiveTab(tab);
    setFormData({ ...initialFormData });
    setShowReturn(false);
  };

  const updateField = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

    const minDateTime = new Date(
      Date.now() - new Date().getTimezoneOffset() * 60000
    )
      .toISOString()
      .slice(0, 16);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!formData.pickup || !formData.pickupDateTime) {
        alert("Please select pickup location and date & time.");
        return;
    }

    if (activeTab !== "hourly" && !formData.drop.trim()) {
        alert("Please enter your drop-off location.");
        return;
    }

    if (showReturn && !formData.returnDateTime) {
        alert("Please select return date and time.");
        return;
    }

    const searchData = {
        tripType: activeTab,
        ...formData,
        returnTrip: activeTab === "outstation" && showReturn,
    };

    navigate("/cab-results", {
        state: searchData,
    });
  };

  return (
    <section className="cab-booking">
      <div className="cab-booking__container">

        {/* Booking Tabs */}
        <div className="cab-booking__tabs">
          <button
            type="button"
            className={activeTab === "airport" ? "active" : ""}
            onClick={() => changeTab("airport")}
          >
            Airport
          </button>

          <button
            type="button"
            className={activeTab === "outstation" ? "active" : ""}
            onClick={() => changeTab("outstation")}
          >
            Outstation
          </button>

          <button
            type="button"
            className={activeTab === "hourly" ? "active" : ""}
            onClick={() => changeTab("hourly")}
          >
            Hourly
          </button>
        </div>

        <form className="cab-booking__form" onSubmit={handleSearch}>

          {/* Pickup Location Dropdown */}
          <div className="cab-booking__field">
            <i className="bi bi-geo-alt"></i>

            <div className="cab-booking__field-content">
              <label htmlFor="pickup">Pickup Location</label>

              <select
                id="pickup"
                name="pickup"
                value={formData.pickup}
                onChange={updateField}
                required
              >
                <option value="" disabled>
                  Select pickup city
                </option>
                <option value="Ujjain">Ujjain</option>
                <option value="Indore">Indore</option>
              </select>
            </div>
          </div>

          {/* Drop Location - Airport & Outstation */}
          {activeTab !== "hourly" && (
            <div className="cab-booking__field">
              <i className="bi bi-car-front"></i>

              <div className="cab-booking__field-content">
                <label htmlFor="drop">Drop-off Location</label>

                <input
                  id="drop"
                  type="text"
                  name="drop"
                  placeholder="Enter any city or destination in India"
                  value={formData.drop}
                  onChange={updateField}
                  required
                />
              </div>
            </div>
          )}

          {/* Pickup Date & Time */}
          <div className="cab-booking__field">
            <i className="bi bi-calendar-event"></i>

            <div className="cab-booking__field-content">
              <label htmlFor="pickupDateTime">
                {activeTab === "hourly"
                  ? "Pickup Date & Time"
                  : "Departure Date & Time"}
              </label>

              <input
                id="pickupDateTime"
                type="datetime-local"
                name="pickupDateTime"
                min={minDateTime}
                value={formData.pickupDateTime}
                onChange={updateField}
                required
              />
            </div>
          </div>

          {/* Hourly Duration */}
          {activeTab === "hourly" && (
            <div className="cab-booking__field">
              <i className="bi bi-clock"></i>

              <div className="cab-booking__field-content">
                <label htmlFor="hours">Duration</label>

                <select
                  id="hours"
                  name="hours"
                  value={formData.hours}
                  onChange={updateField}
                >
                  <option value="4">4 Hours</option>
                  <option value="6">6 Hours</option>
                  <option value="8">8 Hours</option>
                  <option value="10">10 Hours</option>
                  <option value="12">12 Hours</option>
                </select>
              </div>
            </div>
          )}

          {/* Return Trip - Outstation Only */}
          {activeTab === "outstation" && (
            <div className="cab-booking__return">

              {!showReturn ? (
                <button
                  type="button"
                  className="cab-booking__add-return"
                  onClick={() => setShowReturn(true)}
                >
                  <i className="bi bi-plus-circle"></i>
                  Add Return Trip
                </button>
              ) : (
                <>
                  <div className="cab-booking__return-header">
                    <span>Return Journey</span>

                    <button
                      type="button"
                      onClick={() => {
                        setShowReturn(false);
                        setFormData((prev) => ({
                          ...prev,
                          returnDateTime: "",
                        }));
                      }}
                    >
                      Remove
                    </button>
                  </div>

                  <div className="cab-booking__field">
                    <i className="bi bi-calendar-check"></i>

                    <div className="cab-booking__field-content">
                      <label htmlFor="returnDateTime">
                        Return Date & Time
                      </label>

                      <input
                        id="returnDateTime"
                        type="datetime-local"
                        min={formData.pickupDateTime || minDateTime}
                        name="returnDateTime"
                        value={formData.returnDateTime}
                        onChange={updateField}
                        required
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Search Button */}
          <button type="submit" className="cab-booking__submit">
            Search Cabs
            <i className="bi bi-arrow-right"></i>
          </button>

        </form>
      </div>
    </section>
  );
}

export default CabBookingForm;
