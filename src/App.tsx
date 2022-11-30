import "./styles/App.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Flag from "react-flagkit";
import { Routes, Route, NavLink } from "react-router-dom";
import { PageFrance } from "./components/PageFrance";
import { PageSpain } from "./components/PageSpain";
import { PageBrands } from "./components/PageBrands";
import { PageStart } from "./components/PageStart";
import { Page404 } from "./components/Page404";
import { PageCart } from "./components/PageCart";
import PageProduct from "./components/PageProduct";
function App() {
  return (
    <div className="App">
      <header>
        <NavLink to="/">
          <img src="/images/logo.png" className="moveX" />
        </NavLink>

        <nav>
          <NavLink to="brands">BANDS</NavLink>
          <span>|</span>
          <NavLink to="france">KONTAKT</NavLink>
          <span>|</span>
          <NavLink to="spain">ABOUT US</NavLink>
          <span>|</span>
          <NavLink to="cart">
            <AiOutlineShoppingCart className="cartIcon" />
          </NavLink>
          <div>
            <Flag country="US" className="us" />
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="brands" element={<PageBrands />} />

        <Route path="france/*" element={<PageFrance />} />
        <Route path="cart" element={<PageCart />} />
        <Route path="spain" element={<PageSpain />} />

        <Route path="/" element={<PageStart />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
