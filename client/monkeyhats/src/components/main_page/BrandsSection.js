import React, { useState, useEffect } from "react";
import "./BrandsSection.css";
import { css } from "@emotion/react";

const Brands = () => {
  const [brandData, setBrandData] = useState([]);

  useEffect(() => {
    fetch("api/brands")
      .then((res) => res.json())
      .then((data) => {
        setBrandData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const override = css`
    display: block;
    font-size: 4rem;
    font-weight: bold;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <div>
      <div className="brands-container">
        <div className="brands-animation">
          {brandData.map((brandInfo, index) => (
            <img
              className="brandIMG"
              key={index}
              src={brandInfo.urlIMG}
              alt={`${brandInfo.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
