
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import TravelImage from "../../assets/packages/himachal.png"

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";

import "./AboutContact.scss";

function AboutContact() {
  const location = useLocation();

  // Scroll to the requested section when navigating with a URL hash
  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => {
        document.querySelector(location.hash)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="app-layout">
      <Navbar />

      <main className="app-content about-contact-page">

      {/* ABOUT SECTION */}
      <section className="about-section" id="about">
        <div className="about-container">

          <div className="about-content">
            <span className="section-tag">ABOUT GHUMNAFIRNA</span>

            <h1>
              Every Journey Has a Story.
              <span> Let's Make Yours Memorable.</span>
            </h1>

            <p className="about-description">
              At GhumnaFirna, we believe every journey should be
              comfortable, memorable and hassle-free. Whether you're
              planning a spiritual visit, a family vacation or a
              weekend getaway, we're here to make your travel easier.
            </p>

            <p>
              From hotel bookings and comfortable cab services to
              carefully planned travel packages, we bring your
              travel needs together in one place.
            </p>

            <div className="about-actions">
              <Link to="/packages" className="primary-btn">
                Explore Packages <span>→</span>
              </Link>

              <a href="#contact" className="secondary-btn">
                Contact Us
              </a>
            </div>
          </div>

          <div className="about-visual">
            <div className="about-image-main">
              <div className="about-image-placeholder">
                {/* <span>YOUR TRAVEL IMAGE</span> */}
                <img src={TravelImage} />
              </div>
            </div>

            <div className="about-highlight">
              <strong>Travel Made Simple</strong>
              <span>Explore more. Worry less.</span>
            </div>
          </div>

        </div>

        <div className="about-features">
          <div>
            <span>01</span>
            <h3>Easy Bookings</h3>
            <p>Simple and convenient travel planning.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Comfortable Travel</h3>
            <p>Make every journey more comfortable.</p>
          </div>

          <div>
            <span>03</span>
            <h3>All-in-One Service</h3>
            <p>Packages, hotels and cab services together.</p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section" id="contact">
        <div className="contact-container">

          <div className="contact-info">
            <span className="section-tag">CONTACT US</span>

            <h2>
              Let's Plan Your
              <span> Next Journey</span>
            </h2>

            <p className="contact-description">
              Have a question or need help planning your trip?
              Get in touch with us. Our team will be happy to help.
            </p>

            <div className="contact-detail">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Our Location</h4>
                <p>Ujjain, Madhya Pradesh, India</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>
              <div>
                <h4>Call Us</h4>
                <p>+91 XXXXXXXXXX</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email Us</h4>
                <p>support@ghumnafirna.com</p>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <FaClock />
              </div>
              <div>
                <h4>Working Hours</h4>
                <p>Monday – Saturday</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h3>Send Us a Message</h3>
            <p>Fill out the form and we'll get back to you.</p>

            <form className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="Full Name" required />
                <input type="tel" placeholder="Phone Number" required />
              </div>

              <div className="form-row">
                <input type="email" placeholder="Email Address" required />
                <input type="text" placeholder="Subject" required />
              </div>

              <textarea
                placeholder="Tell us how we can help you..."
                rows="5"
                required
              />

              <button type="submit" className="primary-btn">
                Send Message <FaPaperPlane />
              </button>
            </form>
          </div>

        </div>
      </section>
      {/* LOCATION MAP */}
      <div className="contact-map">
        <iframe
          title="GhumnaFirna Location - Ujjain"
          src="https://www.google.com/maps?q=Ujjain,Madhya+Pradesh,India&output=embed"
          width="100%"
          height="600px"
          style={{ border: 0, display: "block"}}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default AboutContact;
