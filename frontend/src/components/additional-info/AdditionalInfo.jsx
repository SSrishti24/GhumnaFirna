
import "./AdditionalInfo.scss";

function InfoCard({ title, items }) {
  if (!items?.length) return null;

  return (
    <div className="additional-info__card">
      <h3>{title}</h3>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function AdditionalInfo({ additionalInfo }) {
  if (!additionalInfo) return null;

  return (
    <section className="additional-info">
      <h2 className="additional-info__heading">
        Additional Info
      </h2>

      <div className="additional-info__list">
        <InfoCard
          title="Travel Information"
          items={additionalInfo.travelInformation}
        />

        <InfoCard
          title="Booking Policy"
          items={additionalInfo.bookingPolicy}
        />

        <InfoCard
          title="Other Important Information"
          items={additionalInfo.otherInformation}
        />
      </div>
    </section>
  );
}

export default AdditionalInfo;
