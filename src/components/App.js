import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CurrencyDropdownMenu from "./common/CurrencyDropdownMenu";
import Navbar from "./common/Navbar";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

const App = () => {
  const dropdownIsOpen = useSelector(
    (state) => state.currencyDropdown.currencyDropdownIsOpen
  );

  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      {dropdownIsOpen ? <CurrencyDropdownMenu /> : null}
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
