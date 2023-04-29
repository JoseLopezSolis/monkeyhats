import { Routes, Route } from "react-router-dom";
import Header from "./components/main_page/Header";
import MainPage from "./components/main_page/MainPage";
import ProductsPage from "./components/main_page/ProductsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/products" element={<ProductsPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
