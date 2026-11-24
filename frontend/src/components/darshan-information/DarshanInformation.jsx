
import "./DarshanInformation.scss";

function DarshanInformation({ darshan }) {
  const title = darshan.title || darshan.name;

  const specialityIcons = [
    "bi-arrow-right-circle-fill",
    "bi-arrow-right-circle-fill",
    "bi-arrow-right-circle-fill",
  ];

  const includeIcons = [
    "bi-check-circle-fill",
    "bi-check-circle-fill",
    "bi-check-circle-fill",
  ];

  return (
    <section className="darshan-information">

      {/* Left Side - Overview */}
      <div className="darshan-information__overview">
        <h2>{title}</h2>

        <p>
          {darshan.description ||
            `Explore ${title} and immerse yourself in a memorable journey filled with divine blessings, beautiful surroundings, and a peaceful darshan experience.`}
        </p>
      </div>

      {/* Right Side - Details */}
      <div className="darshan-information__details">

        {/* Location */}
        {darshan.location && (
          <div className="darshan-information__location">
            <i className="bi bi-geo-alt-fill"></i>
            <span>{darshan.location}</span>
          </div>
        )}

        <div className="darshan-information__lists">

          {/* Specialities */}
          {darshan.specialities?.length > 0 && (
            <div className="darshan-information__group">
              <h3>Highlights</h3>

              <ul>
                {darshan.specialities.map((item, index) => (
                  <li key={index}>
                    <i
                      className={`bi ${
                        specialityIcons[index % specialityIcons.length]
                      }`}
                    ></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Includes */}
          {darshan.includes?.length > 0 && (
            <div className="darshan-information__group">
              <h3>Package Includes</h3>

              <ul>
                {darshan.includes.map((item, index) => (
                  <li key={index}>
                    <i
                      className={`bi ${
                        includeIcons[index % includeIcons.length]
                      }`}
                    ></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>

    </section>
  );
}

export default DarshanInformation;
