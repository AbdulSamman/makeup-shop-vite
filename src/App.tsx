import "./styles/App.scss";
import Flag from "react-flagkit";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Routes, Route, NavLink } from "react-router-dom";
import { PageFrance } from "./pages/PageFrance";
import { PageBrands } from "./pages/PageBrands";
import { PageStart } from "./pages/PageStart";
import { Page404 } from "./pages/Page404";
import { PageCart } from "./pages/PageCart";
import PageProduct from "./pages/PageProduct";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import { PageAboutUs } from "./pages/PageAboutUs";

function App() {
  const { cart } = useContext(AppContext);
  //
  return (
    <div className="App">
      <header>
        <NavLink to="/">
          <img src="/images/logo.png" className="moveX" />
        </NavLink>

        <nav>
          <NavLink to="brands">BRANDS</NavLink>
          <span>|</span>
          <NavLink to="contact">CONTACT</NavLink>
          <span>|</span>
          <NavLink to="aboutUs">ABOUT US</NavLink>
          <span>|</span>
          <NavLink to="cart">
            <AiOutlineShoppingCart className="cartIcon" />
          </NavLink>
          {cart.items.length}
          <div>
            <Flag country="US" className="us" />
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="brands" element={<PageBrands />} />

        <Route path="/product" element={<PageProduct />}>
          <Route path=":id" element={null} />
        </Route>

        <Route path="contact/*" element={<PageFrance />} />
        <Route path="cart" element={<PageCart />} />
        <Route path="aboutUs" element={<PageAboutUs />} />

        <Route path="/" element={<PageStart />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
