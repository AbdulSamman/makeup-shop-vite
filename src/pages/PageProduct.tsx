import "../styles/components/product.scss";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { BsFillCartPlusFill } from "react-icons/bs";

export default function PageProduct() {
  const { products, handleAmountMinus, handleAmountPlus, addToCart } =
    useContext(AppContext);
  const { id } = useParams();

  const product = products.find((m: any) => String(m.id) === String(id));

  return (
    <div className="pageProduct">
      {product ? (
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
          <button className="cartPlusBtn">
            <BsFillCartPlusFill className="cartPlus" onClick={addToCart} />
          </button>
          <span>{product.price} €</span>
        </div>
      ) : (
        <p>You need to send a product id.</p>
      )}
    </div>
  );
}
