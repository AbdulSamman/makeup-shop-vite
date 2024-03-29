import "../styles/components/product.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { BsFillCartPlusFill } from "react-icons/bs";
import { RiArrowGoBackFill } from "react-icons/ri";

export const PageProduct = () => {
  const navigate = useNavigate();
  const { products, handleAmountMinus, handleAmountPlus, addToCart } =
    useContext(AppContext);
  const { id } = useParams();

  const product = products.find((m: any) => String(m.id) === String(id));

  return (
    <div className="pageProduct">
      {product ? (
        <div className="product">
          <section>
            <span onClick={() => navigate(-1)} className="backIcon">
              <RiArrowGoBackFill />
            </span>
            <div>
              <img src={product.api_featured_image} className="productImg" />
            </div>
            <div className="productColors">
              {product.product_colors.map((color: any, i: number) => {
                return (
                  <div
                    key={i}
                    style={{ backgroundColor: `${color.hex_value}` }}
                    className="productColor"
                  ></div>
                );
              })}
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
          </div>
        </div>
      ) : (
        <p>You need to send a product id.</p>
      )}
    </div>
  );
};
