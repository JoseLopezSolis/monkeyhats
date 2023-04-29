import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import logo from "../../imgs/newLogo.jpg";
import "./Header.css";
import { Outlet, Link } from "react-router-dom";
function Header() {
  const [showNav, setShowNav] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [selectedPage, setSelectedPage] = useState("home");
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  const showNavHandler = function () {
    setShowNav(!showNav);
    // Update the animation direction based on the showNav state
  };

  const handleWindowResize = () => {
    setViewportWidth(window.innerWidth);
  };

  // JSX code
  useEffect(() => {
    if (showNav) {
      document.body.classList.add("popup-open");
    } else {
      document.body.classList.remove("popup-open");
    }
  }, [showNav]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const selectHomeHandler = function () {
    setSelectedPage("home");
  };
  const selectProductHandler = function () {
    setSelectedPage("product");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (
        currentScrollPosition < lastScrollPosition &&
        currentScrollPosition > 250
      )
        setIsHeaderFixed(true);
      if (currentScrollPosition > lastScrollPosition) setIsHeaderFixed(false);
      if (currentScrollPosition <= 50) setIsHeaderFixed(false);
      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition]);
  return (
    <div>
      <div className="message-container">
        <div className="message">Envío gratis a partir de $999mx</div>
        <div className="social-media-links">
          <a
            href="https://www.instagram.com/monkey_hats.mx/"
            className="social-link"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} rag className="social-icon" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5213122105665"
            target="_blank"
            className="social-link"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
          </a>
        </div>
      </div>
      <div className={`header-background ${isHeaderFixed ? "fixed" : ""}`}>
        <div className="page-width">
          <header>
            {showNav && (
              <div className={`nav-container ${showNav ? "right" : "left"}`}>
                <div className="urls">
                  <Link to="/" onClick={showNavHandler} className="link">
                    Home
                  </Link>
                  <Link
                    to="/products"
                    onClick={showNavHandler}
                    className="link"
                  >
                    Productos
                  </Link>
                </div>
              </div>
            )}
            {viewportWidth < 768 && (
              <div className="mobile-navigation">
                <FontAwesomeIcon
                  icon={!showNav ? faBars : faX}
                  onClick={showNavHandler}
                  id="bars"
                />
              </div>
            )}
            <div className="logo">
              <img className="logo" src={logo}></img>
            </div>
            {viewportWidth > 768 && (
              <div className="bar-navigation">
                <ul>
                  <li src="#">
                    <span
                      onClick={selectHomeHandler}
                      className={`navlink ${
                        selectedPage === "home" ? "active" : ""
                      }`}
                    >
                      <Link to="/">Home</Link>
                    </span>
                  </li>
                  <li>
                    <span
                      onClick={selectProductHandler}
                      className={`navlink ${
                        selectedPage === "product" ? "active" : ""
                      }`}
                    >
                      <Link to="/products">productos</Link>
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </header>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
export default Header;
