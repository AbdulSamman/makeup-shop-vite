import { ControlledCarousel } from "./carousel";
import { BsFillCartPlusFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import "../styles/components/products.scss";

export const Products = () => {
  const { filteredProducts, handleAmountMinus, handleAmountPlus, addToCart } =
    useContext(AppContext);

  return (
    <div className="products">
      {filteredProducts.length === 0 && <ControlledCarousel />}

      {filteredProducts.length > 0 && (
        <>
          {filteredProducts.map((product: any, i: number) => {
            return (
              <div key={i} className="product">
                <NavLink to={`/product/${product.id}`}>
                  <div>
                    <img src={product.image_link} className="productImg" />
                  </div>
                  <p>{product.name}</p>
                  <div className="buttons">
                    <button onClick={() => handleAmountMinus(product)}>
                      -
                    </button>
                    {product.amount}
                    <button onClick={() => handleAmountPlus(product)}>+</button>
                  </div>
                  <button className="cartPlusBtn">
                    <BsFillCartPlusFill
                      className="cartPlus"
                      onClick={addToCart}
                    />
                  </button>
                  <span>{product.price} €</span>
                </NavLink>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
