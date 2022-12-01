import { useContext } from "react";
import { AppContext } from "../AppContext";
import "../styles/components/products.scss";
export const PageCart = () => {
  const { cart, handleAmountMinus, handleAmountPlus } = useContext(AppContext);
  return (
    <div>
      {cart.items.map((product: any) => {
        return (
          <div className="product">
            <div>
              <img src={product.image_link} className="productImg" />
            </div>
            <p>{product.name}</p>
            <div className="buttons">
              <button onClick={() => handleAmountMinus(product)}>-</button>
              {product.amount}
              <button onClick={() => handleAmountPlus(product)}>+</button>
            </div>

            <span>{product.price} €</span>
          </div>
        );
      })}
    </div>
  );
};
