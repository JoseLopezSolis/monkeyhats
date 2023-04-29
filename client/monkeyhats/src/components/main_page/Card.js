import React, { useState, useEffect, useRef } from "react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "./Card.css";

function Card(props) {
  const [hover, setHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);
  const popupRef = useRef(null);

  // JSX code
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.classList.add("popup-open");
    } else {
      document.body.classList.remove("popup-open");
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  const showPrevImg = () => {
    setCurrentImg((currentImg - 1 + props.img.length) % props.img.length);
  };

  const showNextImg = () => {
    setCurrentImg((currentImg + 1) % props.img.length);
  };

  const handleTogglePopUp = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div key={props.id}>
      <div className="page-width">
        <div className="card-container">
          <div
            className="card"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={togglePopUp}
          >
            <div className="img-container">
              <img
                src={hover ? props.img[0] : props.img[1]}
                alt={props.nameProduct}
              />
            </div>
            <div className="product-information">
              <span className="name-product">{props.nameProduct}</span>
              <span className="price-product">${props.price}.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className={isOpen ? "blur-background" : ""}></div>
      {isOpen && (
        <div ref={popupRef} className={`pop-up`}>
          <span className="close-button" onClick={togglePopUp}>
            <FontAwesomeIcon icon={faTimes} size="3x" className="x-icon" />
          </span>
          <div class="brands">
            <img src={props.imgBrand} class="img-brand" />
          </div>
          <h2 class="name-product-pop-up">{props.nameProduct}</h2>
          <div className="pop-up-product-section">
            <div>
              {props.img.length > 1 && (
                <div className="img-controls">
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="image-control showPrevButton"
                    onClick={showPrevImg}
                  />
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="image-control showNextButton"
                    onClick={showNextImg}
                  />
                </div>
              )}
              {props.img.map((imgSrc, index) => (
                <img
                  alt={props.nameProduct}
                  key={index}
                  src={imgSrc}
                  style={{ display: index === currentImg ? "block" : "none" }}
                />
              ))}
            </div>
            <span className="price-popup">${props.price}.00</span>
          </div>
          <div className="buy-button-container">
            <a href="youtube.com" class="items-row">
              <button class="button-87" role="button">
                <FontAwesomeIcon icon={faWhatsapp} class="whats-icon" />
                <span>Hacer pedido</span>
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
