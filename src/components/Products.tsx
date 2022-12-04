import { ControlledCarousel } from "./carousel";
import { BsFillCartPlusFill, BsFillArrowUpCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import "../styles/components/products.scss";

export const Products = () => {
  const { filteredProducts, handleAmountMinus, handleAmountPlus, addToCart } =
    useContext(AppContext);

  return (
    <div className="products">
      {filteredProducts.length >= 0 && <ControlledCarousel />}

      {filteredProducts.length > 0 && (
        <>
          {filteredProducts.map((product: any, i: number) => {
            return (
              <div key={i} className="product">
                <NavLink to={`/product/${product.id}`}>
                  <div>
                    <img
                      src={product.api_featured_image}
                      className="productImg"
                    />
                    <span className="brandName">
                      {product.brand.toUpperCase()}
                    </span>
                  </div>
                </NavLink>
                <p>{product.name}</p>
                <div className="buttons">
                  <button onClick={() => handleAmountMinus(product)}>-</button>
                  {product.amount}
                  <button onClick={() => handleAmountPlus(product)}>+</button>
                </div>
                <button className="cartPlusBtn">
                  <BsFillCartPlusFill
                    className="cartPlus"
                    onClick={() => addToCart(product)}
                  />
                </button>
                {product.price > 0.0 ? (
                  <span className="price">{product.price} €</span>
                ) : (
                  <span className="price sold">SOLD</span>
                )}
              </div>
            );
          })}
          <div className="arrow">
            <a href="#">
              <BsFillArrowUpCircleFill className="arrowIcon" />
            </a>
          </div>
        </>
      )}
    </div>
  );
};
