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
          <section>
            <div>
              <img src={product.api_featured_image} className="productImg" />
            </div>
            <div className="buttons">
              <button onClick={() => handleAmountMinus(product)}>-</button>
              {product.amount}
              <button onClick={() => handleAmountPlus(product)}>+</button>
            </div>
          </section>
          <div className="description">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="priceCart">
              <button className="cartPlusBtn">
                <BsFillCartPlusFill className="cartPlus" onClick={addToCart} />
              </button>

              <span className="price">{product.price} €</span>
            </div>
          </div>
        </div>
      ) : (
        <p>You need to send a product id.</p>
      )}
    </div>
  );
}
