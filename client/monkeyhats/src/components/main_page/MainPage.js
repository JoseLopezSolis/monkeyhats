import Banner from "./Banner.js";
import Products from "./Products.js";
import Footer from "./Footer.js";
import Brands from "./BrandsSection.js";
import "./MainPage.css";

const MainPage = function () {
  return (
    <div>
      <div className="margin-top"></div>
      <Banner />
      <div className="page-width">
        <Brands />

        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
