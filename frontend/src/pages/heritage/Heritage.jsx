import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import TravelCategories from "../../components/travel-categories/TravelCategories";
import HeritageCard from "../../components/heritage-card/HeritageCard";

import { heritageData } from "../../data/heritageData";

import "./Heritage.scss";

function Heritage() {
  return (
    <>
      <title>Heritage Tours & Historical Places in India | GhumnaFirna</title>

      <meta
        name="description"
        content="Explore India's historical destinations, heritage sites, forts and palaces with GhumnaFirna. Discover memorable heritage tours and travel packages."
      />

      <link
        rel="canonical"
        href="https://ghumnafirna.com/heritages"
      />

      <meta
        property="og:title"
        content="Heritage Tours in India | GhumnaFirna"
      />

      <meta
        property="og:description"
        content="Discover historical places, heritage destinations and cultural journeys with GhumnaFirna."
      />

      <meta
        property="og:url"
        content="https://ghumnafirna.com/heritages"
      />

      <meta property="og:type" content="website" />
      
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
              and heritage.
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