
function GuestDetailsForm({
  contactDetails,
  setContactDetails,
}) {
  const updateField = (key, value) => {
    setContactDetails((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <section className="guest-details">
      <div className="guest-details__header">
        <i className="bi bi-person-circle"></i>
        <h3>Booking Contact Details</h3>
      </div>

      <div className="guest-details__body">
        <div className="guest-details__contact-grid">

          {/* Full Name */}
          <label>
            <span>Full Name</span>
            <input
              type="text"
              placeholder="ENTER YOUR FULL NAME"
              value={contactDetails.name}
              onChange={(e) =>
                updateField("name", e.target.value)
              }
              required
            />
          </label>

          {/* Mobile Number */}
          <label>
            <span>Mobile Number</span>

            <div className="guest-details__phone">
              <span>+91</span>

              <input
                type="tel"
                maxLength={10}
                placeholder="ENTER MOBILE NUMBER"
                value={contactDetails.phone}
                onChange={(e) =>
                  updateField(
                    "phone",
                    e.target.value.replace(/\D/g, "")
                  )
                }
                required
              />
            </div>
          </label>

        </div>

        <p>
          Your booking details will be shared on this mobile number.
        </p>
      </div>
    </section>
  );
}

export default GuestDetailsForm;
