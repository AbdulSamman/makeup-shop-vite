import { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaSpinner } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { ControlledCarousel } from "./carousel";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useParams, NavLink } from "react-router-dom";

const url = "http://makeup-api.herokuapp.com/api/v1/products.json";

export const PageBrands = () => {
  const { id } = useParams();
  const [products, setProducts] = useState<any[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  const loadBrands = (_products: any[]) => {
    const _brands: string[] = [];

    _products.forEach((_product) => {
      if (!_brands.includes(_product.brand)) {
        _brands.push(_product.brand);
      }
    });
    setBrands(_brands);
  };

  useEffect(() => {
    (async () => {
      const _products = (await axios.get(url)).data;
      _products.forEach((product: any) => {
        product.amount = 0;
      });

      console.log(_products);
      loadBrands(_products);
      setProducts(_products);
    })();
  }, []);

  const handleAmountMinus = (product: any) => {
    product.amount--;
    if (product.amount < 0) {
      product.amount = 0;
    }
    setProducts([...products]);
  };

  const handleAmountPlus = (product: any) => {
    product.amount++;
    setProducts([...products]);
  };

  const handleDropDownChoice = (e: any) => {
    const brand = e.target.innerHTML;
    const _filteredProducts = products.filter((m) => m.brand === brand);
    setFilteredProducts(_filteredProducts);
    console.log(brand);
  };

  return (
    <div className="pageBrands">
      <div className="brands">
        <DropdownButton id="dropdown-basic-button" title={<AiOutlineMenu />}>
          {brands.length > 0 ? (
            <>
              {brands.map((brand: string, i: number) => {
                return (
                  <Dropdown.Item
                    value={brand}
                    key={i}
                    onClick={handleDropDownChoice}
                  >
                    {brand}
                  </Dropdown.Item>
                );
              })}
            </>
          ) : (
            <div className="loading">
              <FaSpinner className="spinner" />
            </div>
          )}
        </DropdownButton>
      </div>
      <div className="products">
        {filteredProducts.length === 0 && <ControlledCarousel />}

        {filteredProducts.length > 0 && (
          <>
            {filteredProducts.map((product, i) => {
              return (
                <div key={i} className="product">
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
                    <BsFillCartPlusFill className="cartPlus" />
                  </button>
                  <span>{product.price} €</span>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};
