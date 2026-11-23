
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiPackage,
  FiTruck,
  FiMapPin,
  FiBriefcase,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import "./Navbar.scss";
import logo from "../../assets/logo1.png";

function Navbar() {
  const navLinks = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "Packages", path: "/packages", icon: <FiPackage /> },
    { name: "Cabs", path: "/cabs", icon: <FiTruck /> },
    { name: "Darshan", path: "/darshan", icon: <FiMapPin /> },
    { name: "Hotels", path: "/hotels", icon: <FiBriefcase /> },
  ];

  return (
    <>
      <nav className="navbar">
<div className="navbar__container">

  {/* Left: Logo */}
  <NavLink to="/" className="navbar__logo">
    <img src={logo} alt="GhumnaFirna Logo" />
  </NavLink>

  {/* Center: Desktop Navigation */}
  <div className="navbar__links">
    {navLinks.map((link) => (
      <NavLink
        key={link.name}
        to={link.path}
        end={link.path === "/"}
        className={({ isActive }) =>
          isActive ? "navbar__link active" : "navbar__link"
        }
      >
        {link.name}
      </NavLink>
    ))}
  </div>

  {/* Right: WhatsApp */}
  <a
    href="https://wa.me/91"
    target="_blank"
    rel="noopener noreferrer"
    className="navbar__whatsapp"
    aria-label="Contact on WhatsApp"
  >
    <FaWhatsapp />
    <span>WhatsApp</span>
  </a>

</div>
      </nav>

      {/* Mobile Bottom Navigation */}
      {/* <div className="mobile-nav">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            end={link.path === "/"}
            className={({ isActive }) =>
              isActive ? "mobile-nav__link active" : "mobile-nav__link"
            }
          >
            <span className="mobile-nav__icon">{link.icon}</span>
            <span className="mobile-nav__text">{link.name}</span>
          </NavLink>
        ))}
      </div> */}
    </>
  );
}

export default Navbar;
