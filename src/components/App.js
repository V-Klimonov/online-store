import { Route, Routes } from "react-router-dom";
import { Button } from "./common";
import Navbar from "./common/Navbar";
import Cart from "./pages/Cart/Cart";
import Category from "./pages/Category/Category";
import Home from "./pages/Home/Home";
import ProductPage from "./pages/ProductPage/ProductPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category/:category" element={<Category />} />
        <Route
          path="category/:category/product/:id"
          element={<ProductPage />}
        />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
