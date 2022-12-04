import { useContext } from "react";
import { AppContext } from "../AppContext";
import "../styles/pages/pageCart.scss";

export const PageCart = () => {
  const { cart } = useContext(AppContext);

  return (
    <div className="pageCart">
      <div className="products">
        {cart.items.map((product: any, i: number) => {
          return (
            <div className="product" key={i}>
              <div>
                <img src={product.api_featured_image} className="productImg" />
              </div>
              <div className="cartBill">
                <span className="name">{product.name}</span>

                <span>
                  {product.amount}x: {product.price} €
                </span>
                <span>{(product.amount * product.price).toFixed(2)} €</span>
              </div>
            </div>
          );
        })}
        <div className="total">
          <span>TOTAL</span>

          <span>00.00 €</span>
        </div>
        <button className="btn btn-primary">BUY</button>
      </div>
    </div>
  );
};
