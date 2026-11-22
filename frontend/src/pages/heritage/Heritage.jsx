import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import TravelCategories from "../../components/travel-categories/TravelCategories";
import HeritageCard from "../../components/heritage-card/HeritageCard";

import { heritageData } from "../../data/heritageData";

import "./Heritage.scss";

function Heritage() {
  return (
    <>
      <Navbar />

      <div className="mobile-travel-categories">
        <TravelCategories />
      </div>

      <main className="heritage-page">
        <div className="heritage-page__container">

          <div className="heritage-page__heading">
            <h1>Explore Heritage Destinations</h1>
            <p>
              Discover India's rich history, royal architecture
              and timeless cultural heritage.
            </p>
          </div>

          <div className="heritage-page__grid">
            {heritageData.map((item) => (
              <HeritageCard
                key={item.id}
                heritage={item}
              />
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default Heritage;