import Products from "./Products.js";
import Footer from "./Footer.js";
import "./ProductsPage.css";

const MainPage = function () {
  return (
    <div>
      <div className="margin-top"></div>
      <div className="page-width">
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
