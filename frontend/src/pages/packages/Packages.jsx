
import Navbar from "../../components/navbar/Navbar";
import PackageCard from "../../components/package-card/PackageCard";
import Footer from "../../components/footer/Footer";

import { packagesData } from "../../data/packagesData";
import TravelCategories from "../../components/travel-categories/TravelCategories";

import "./Packages.scss";

function Packages() {
  return (
    <>
      <title>Tour Packages in India | Holiday Trips - GhumnaFirna</title>

      <meta
        name="description"
        content="Explore exciting tour packages across India with GhumnaFirna. Discover holiday destinations, customized trips, comfortable stays and memorable travel experiences."
      />

      <link
        rel="canonical"
        href="https://ghumnafirna.com/packages"
      />

      <meta
        property="og:title"
        content="Tour Packages in India | GhumnaFirna"
      />

      <meta
        property="og:description"
        content="Explore amazing holiday packages and plan your next trip with GhumnaFirna."
      />

      <meta
        property="og:url"
        content="https://ghumnafirna.com/packages"
      />

      <meta property="og:type" content="website" />

      <Navbar />

      <div className="mobile-travel-categories">
        <TravelCategories />
      </div>

      <section className="packages-page">
        <div className="packages-page__container">
          <h1>Explore Our <span>Packages</span></h1>
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
