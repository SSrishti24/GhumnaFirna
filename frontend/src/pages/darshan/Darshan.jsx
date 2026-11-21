
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import DarshanCard from "../../components/darshan-card/DarshanCard";

import { darshanData } from "../../data/darshanData";
import TravelCategories from "../../components/travel-categories/TravelCategories";

import "./Darshan.scss";

function Darshan() {
  return (
    <>
      <Navbar />

      <div className="mobile-travel-categories">
        <TravelCategories />
      </div>

      <section className="darshan-page">
        <div className="darshan-page__container">

          <h1 className="darshan-page__heading">
            Explore Darshan Packages
          </h1>

          <p className="darshan-page__description">
            Discover spiritual destinations and plan your
            memorable darshan journey.
          </p>

          <div className="darshan-page__grid">
            {darshanData.map((item) => (
              <DarshanCard
                key={item.id}
                darshan={item}
              />
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Darshan;
