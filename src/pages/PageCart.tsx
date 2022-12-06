import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import "../styles/pages/pageCart.scss";

export const PageCart = () => {
  const shippingCoast = 3.99;
  const { cart } = useContext(AppContext);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const totalPrices = (items: any) => {
    let prices: any[] = [];
    items.forEach((item: any) => {
      prices.push(parseFloat(item.price) * item.amount);
    });

    return prices.reduce((total: number, price: number) => total + price, 0);
  };
  useEffect(() => {
    const items = cart.items;
    setTotalPrice(totalPrices(items));
  }, [cart]);

  return (
    <div className="pageCart">
      <div className="products">
        {cart.items.map((product: any, i: number) => {
          return (
            <div className="product" key={i}>
              <div className="productImg">
                <img src={product.api_featured_image} />
              </div>
              <div className="cartBill">
                <p className="name">{product.name}</p>
                <div className="prices">
                  <span>
                    {product.amount}x: {product.price} €
                  </span>
                  <span>{(product.amount * product.price).toFixed(2)} €</span>
                </div>
              </div>
            </div>
          );
        })}
        <div className="total">
          <span id="total">TOTAL</span>
          {totalPrice < 49 ? (
            <div>
              <span>Shipping: {shippingCoast} €</span>
              <span>free shipping from 49 euro</span>
            </div>
          ) : (
            <div>
              <span>
                <del>Shipping: {shippingCoast} €</del>
              </span>
              <span>free shipping from 49 euro</span>
            </div>
          )}
          {totalPrice > 49 ? (
            <span>
              {" "}
              <span>Free Shipping: </span>
              {totalPrice.toFixed(2)} €
            </span>
          ) : (
            <span>{(shippingCoast + totalPrice).toFixed(2)} €</span>
          )}
        </div>
        <button className="btn btn-primary">BUY</button>
      </div>
    </div>
  );
};
