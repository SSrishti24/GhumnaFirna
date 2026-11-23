
import { Link } from "react-router-dom";
import logo from "../../assets/logo1.png";

import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        <div className="footer__main">

          {/* Brand */}
          <div className="footer__brand">
            <img src={logo} alt="Ghumnafirna Logo" />

            <p>
              Discover new destinations, explore beautiful places
              and create unforgettable travel memories with GhumnaFirna.
            </p>

            <div className="footer__social">
              <a href="#" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__links">
            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/packages">All Packages</Link>
            <Link to="/about-us#about">About Us</Link>
            <Link to="/about-us#contact">Contact Us</Link>
          </div>

          {/* Destinations */}
          <div className="footer__links footer__destinations" >
            <h3>Popular Destinations</h3>

            <a href="#himachal">Himachal</a>
            <a href="#kashmir">Kashmir</a>
            <a href="#rajasthan">Rajasthan</a>
            <a href="#more">Explore More</a>
          </div>

          {/* Services */}
          <div className="footer__links">
            <h3>Our Services</h3>

            <a href="#flights">Flights</a>
            <a href="#hotels">Hotels & Stay</a>
            <a href="#cabs">Cab Services</a>
            <a href="#holidays">Holiday Packages</a>
          </div>

        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} GhumnaFirna. All Rights Reserved.
          </p>

          <div className="footer__bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
