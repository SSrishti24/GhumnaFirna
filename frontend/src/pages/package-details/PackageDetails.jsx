
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { packagesData } from "../../data/packagesData";

import DayWiseItinerary from "../../components/day-wise-itinerary/DayWiseItinerary";
import PackageInclusions from "../../components/package-inclusions/PackageInclusions";
import AdditionalInfo from "../../components/additional-info/AdditionalInfo";
import PackageBookingSidebar from "../../components/package-booking-sidebar/PackageBookingSidebar";

import "./PackageDetails.scss";

function PackageDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("overview");

  const packageData = packagesData.find(
    (item) => item.id === Number(id)
  );

  // Smooth scroll on tab click
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);

    document.getElementById(tabId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Update active tab while scrolling
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

  if (!packageData) {
    return (
      <>
        <Navbar />

        <div className="package-details__not-found">
          <h2>Package Not Found</h2>

          <button onClick={() => navigate("/packages")}>
            Explore Packages
          </button>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="package-details">
        <div className="container">

          <div className="package-details__container">

            {/* Left Side */}
            <div className="package-details__left">

              {/* Breadcrumb */}
              <div className="package-details__breadcrumb">
                <Link to="/">Home</Link>
                <i className="bi bi-chevron-right"></i>

                <Link to="/packages">Holidays</Link>
                <i className="bi bi-chevron-right"></i>

                <span>{packageData.title}</span>
              </div>

              {/* Package Header */}
              <div className="package-details__header">

                <div className="package-details__title-row">
                  <div className="package-details__title-content">

                    <div className="package-details__title-info">
                      <h1>
                        {packageData.title} : {packageData.duration}
                      </h1>

                      <p className="package-details__location">
                        <i className="bi bi-geo-alt-fill"></i>
                        {packageData.location}
                      </p>
                    </div>

                    <span className="package-details__tag">
                      Land Only
                    </span>

                  </div>
                </div>

                <p className="package-details__stay">
                  {packageData.stayPlan}
                </p>

              </div>

              {/* Package Image */}
              <div className="package-details__image">
                <img
                  src={packageData.image}
                  alt={packageData.title}
                />
              </div>

              {/* Sticky Package Tabs */}
              <nav className="package-details__tabs">
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

              {/* Package Overview */}
              <section
                id="overview"
                className="package-details__overview tab-section"
              >
                <h2>Package Overview</h2>

                <div className="package-details__overview-content">
                  <p>{packageData.overview}</p>
                </div>
              </section>

              {/* Day Wise Itinerary */}
              <div id="itinerary" className="tab-section">
                <DayWiseItinerary
                  itinerary={packageData.itinerary}
                />
              </div>

              {/* Inclusions / Exclusions */}
              <div id="inclusions" className="tab-section">
                <PackageInclusions
                  inclusions={packageData.inclusions}
                  exclusions={packageData.exclusions}
                />
              </div>

              {/* Additional Info */}
              <div id="additional-info" className="tab-section">
                <AdditionalInfo
                  additionalInfo={packageData.additionalInfo}
                />
              </div>

            </div>

            {/* Right Side - Booking Section Later */}
            <aside className="package-details__right">
                <PackageBookingSidebar packageData={packageData} />
            </aside>

          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default PackageDetails;
