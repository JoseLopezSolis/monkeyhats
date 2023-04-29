import React, { useState, useEffect, lazy, suspense, Suspense } from "react";
import "./Products.css";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const Card = lazy(() => import("./Card"));

function Products() {
  const [backendData, setBackendData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const override = css`
    display: block;
    font-size: 4rem;
    font-weigh: bold;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <div>
      <div className="message-products">
        <span>Productos</span>
      </div>
      {loading ? (
        <div className="loading">
          <ClipLoader color={"#000"} loading={loading} css={override} />
        </div>
      ) : (
        <div className="products-container">
          {/* Wrap Card component with Suspense */}
          <Suspense fallback={<div>Loading...</div>}>
            {backendData.map((productData) => {
              return (
                <Card
                  key={productData.id}
                  brand={productData.brand}
                  nameProduct={productData.nameProduct}
                  price={productData.price}
                  discount={productData.discount}
                  img={[
                    productData.images[0],
                    productData.images[1],
                    productData.images[2],
                    productData.images[3],
                  ]}
                  imgBrand={productData.imgBrand}
                />
              );
            })}
          </Suspense>
        </div>
      )}
    </div>
  );
}

export default Products;
