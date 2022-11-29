import { useState, useEffect } from "react";
import axios from "axios";

const url = "http://makeup-api.herokuapp.com/api/v1/products.json";
const productsUrl = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`;

export const PageMaybelline = () => {
  const [amount, setAmount] = useState(0);

  const handleAmountMinus = (product: any) => {
    if (amount > 0 && product.id) {
      setAmount(amount - 1);
    }
  };

  return (
    <div className="pageMaybelline">
      <h2>There are {products.length}</h2>
      <div className="products">
        {products.map((product) => {
          return (
            <div key={product.id} className="product">
              <div>
                <img src={product.image_link} />
              </div>
              <p>{product.name}</p>
              <div className="buttons">
                <button onClick={() => handleAmountMinus(product)}>-</button>
                {amount}
                <button onClick={() => setAmount(amount + 1)}>+</button>
              </div>
              <span>{product.price} €</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
