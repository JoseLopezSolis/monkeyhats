import React from "react";
import bannerImg from "../../imgs/banner.jpg";
import "./Banner.css";
function Banner() {
  return (
    <div>
      <div className="banner">
        <a href="https://www.instagram.com/p/CqlgunJP4nY/" target="_blanket">
          <img className="img-banner" src={bannerImg} alt=""></img>
        </a>
      </div>
    </div>
  );
}

export default Banner;
