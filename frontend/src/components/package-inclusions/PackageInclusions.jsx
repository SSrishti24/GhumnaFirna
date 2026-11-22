
import "./PackageInclusions.scss";

function PackageInclusions({
  inclusions = [],
  exclusions = [],
}) {
  if (!inclusions.length && !exclusions.length) {
    return null;
  }

  return (
    <section className="package-inclusions">

      {/* Inclusions */}
      <div className="package-inclusions__card package-inclusions__card--included">
        <h2>Inclusions</h2>

        <ul>
          {inclusions.map((item, index) => (
            <li key={index}>
              <i className="bi bi-check-lg"></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Exclusions */}
      <div className="package-inclusions__card package-inclusions__card--excluded">
        <h2>Exclusions</h2>

        <ul>
          {exclusions.map((item, index) => (
            <li key={index}>
              <i className="bi bi-x-lg"></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}

export default PackageInclusions;
