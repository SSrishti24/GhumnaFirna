
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import { heritageData } from "../../data/heritageData";

import DayWiseItinerary from "../../components/day-wise-itinerary/DayWiseItinerary";
import PackageInclusions from "../../components/package-inclusions/PackageInclusions";
import AdditionalInfo from "../../components/additional-info/AdditionalInfo";
import PackageBookingSidebar from "../../components/package-booking-sidebar/PackageBookingSidebar";

import "./HeritageDetails.scss";

function HeritageDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("overview");

  const heritage = heritageData.find(
    (item) => item.id === Number(id)
  );

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);

    document.getElementById(tabId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const sectionIds = [
      "overview",
      "itinerary",
      "inclusions",
      "additional-info",
    ];

    const handleScroll = () => {
      let currentSection = "overview";

      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (section && section.getBoundingClientRect().top <= 170) {
          currentSection = sectionId;
        }
      });

      setActiveTab(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id]);

  if (!heritage) {
    return (
      <>
        <Navbar />

        <div className="heritage-details__not-found">
          <h2>Heritage Destination Not Found</h2>

          <button onClick={() => navigate("/heritages")}>
            Explore Heritage
          </button>
        </div>

        <Footer />
      </>
    );
  }

  const title = heritage.title || heritage.name;

  return (
    <>
      <Navbar />

      <main className="heritage-details">
        <div className="container">
          <div className="heritage-details__container">

            {/* Left Side */}
            <div className="heritage-details__left">

              {/* Breadcrumb */}
              <div className="heritage-details__breadcrumb">
                <Link to="/">Home</Link>
                <i className="bi bi-chevron-right"></i>

                <Link to="/heritages">Heritages</Link>
                <i className="bi bi-chevron-right"></i>

                <span>{heritage.name}</span>
              </div>

              {/* Heritage Header */}
              <div className="heritage-details__header">
                <div className="heritage-details__title-row">
                  <div className="heritage-details__title-content">

                    <div className="heritage-details__title-info">
                      <h1>
                        {title} : {heritage.duration}
                      </h1>

                      <p className="heritage-details__location">
                        <i className="bi bi-geo-alt-fill"></i>
                        {heritage.location}
                      </p>
                    </div>

                    <span className="heritage-details__tag">
                      Land Only
                    </span>

                  </div>
                </div>

                <p className="heritage-details__stay">
                  {heritage.stayPlan}
                </p>
              </div>

              {/* Heritage Image */}
              <div className="heritage-details__image">
                <img
                  src={heritage.image}
                  alt={heritage.name}
                />
              </div>

              {/* Sticky Tabs */}
              <nav className="heritage-details__tabs">
                <button
                  type="button"
                  className={activeTab === "overview" ? "active" : ""}
                  onClick={() => handleTabClick("overview")}
                >
                  Overview
                </button>

                <button
                  type="button"
                  className={activeTab === "itinerary" ? "active" : ""}
                  onClick={() => handleTabClick("itinerary")}
                >
                  Day wise Itinerary
                </button>

                <button
                  type="button"
                  className={activeTab === "inclusions" ? "active" : ""}
                  onClick={() => handleTabClick("inclusions")}
                >
                  Inclusion/Exclusions
                </button>

                <button
                  type="button"
                  className={activeTab === "additional-info" ? "active" : ""}
                  onClick={() => handleTabClick("additional-info")}
                >
                  Additional Info
                </button>
              </nav>

              {/* Overview */}
              <section
                id="overview"
                className="heritage-details__overview tab-section"
              >
                <h2>Heritage Overview</h2>

                <div className="heritage-details__overview-content">
                  <p>{heritage.overview}</p>
                </div>
              </section>

              {/* Day Wise Itinerary */}
              <div id="itinerary" className="tab-section">
                <DayWiseItinerary
                  itinerary={heritage.itinerary}
                />
              </div>

              {/* Inclusions / Exclusions */}
              <div id="inclusions" className="tab-section">
                <PackageInclusions
                  inclusions={heritage.inclusions}
                  exclusions={heritage.exclusions}
                />
              </div>

              {/* Additional Information */}
              <div id="additional-info" className="tab-section">
                <AdditionalInfo
                  additionalInfo={heritage.additionalInfo}
                />
              </div>

            </div>

            {/* Right Side - Booking */}
            <aside className="heritage-details__right">
              <PackageBookingSidebar
                packageData={heritage}
              />
            </aside>

          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default HeritageDetails;
