
import Navbar from "../../components/navbar/Navbar";
import PackageCard from "../../components/package-card/PackageCard";
import Footer from "../../components/footer/Footer";

import { packagesData } from "../../data/packagesData";
import TravelCategories from "../../components/travel-categories/TravelCategories";

import "./Packages.scss";

function Packages() {
  return (
    <>
      <Navbar />

      <div className="mobile-travel-categories">
        <TravelCategories />
      </div>

      <section className="packages-page">
        <div className="packages-page__container">
          <h1>Explore Our Packages</h1>
          <p>Find the perfect holiday for your next journey.</p>

          <div className="packages-page__grid">
            {packagesData.map((item) => (
              <PackageCard
                key={item.id}
                packageData={item}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Packages;
