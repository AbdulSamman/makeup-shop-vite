import { Routes, Route, NavLink } from "react-router-dom";
import { PageAboutUs } from "./PageAboutUs";
import { PageKontakt } from "./PageKontakt";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaSpinner } from "react-icons/fa";

const url = "http://makeup-api.herokuapp.com/api/v1/products.json";

export const PageBrands = () => {
  const [amount, setAmount] = useState(0);
  const [products, setProducts] = useState<any[]>([]);
  //const [brands, setBrands] = useState<any[]>([]);
  const [activeProduct, setActiveProduct] = useState<any>({});

  const loadProducts = (_products: any[]) => {
    let _filteredProducts: any = [];
    const brands: any = [];

    _products.forEach((_product) => {
      if (!brands.includes(_product.brand)) {
        _filteredProducts.push(_product);
        brands.push(_product.brand);
      }
    });
    setProducts(_filteredProducts);
  };

  useEffect(() => {
    (async () => {
      const _products = (await axios.get(url)).data;
      console.log(_products);
      loadProducts(_products);
    })();
  }, []);

  const handleAmountMinus = (product: any) => {
    if (amount > 0 && product.id) {
      setAmount(amount - 1);
    }
  };
  const handleDropDownChoice = (e: any) => {
    console.log(e.target.innerHTML);
    const brand = e.target.innerHTML;
    const _activeProduct = products.find((m) => m.brand === brand);
    setActiveProduct(_activeProduct);
    console.log(_activeProduct);
  };
  return (
    <div className="pageBrands">
      <div className="container">
        <h2>There are {products.length}</h2>
        <ul className="brands">
          <DropdownButton id="dropdown-basic-button" title="MENU">
            {products.length > 0 ? (
              <>
                {products.map((product: any, i: any) => {
                  return (
                    <Dropdown.Item
                      value={product.brand}
                      key={i}
                      onClick={handleDropDownChoice}
                    >
                      {product.brand}
                    </Dropdown.Item>
                  );
                })}
              </>
            ) : (
              <div className="loading">
                <FaSpinner className="spinner" />
                <p>Loading products...</p>
              </div>
            )}
          </DropdownButton>
        </ul>

        <div className="products">
          {Object.keys(activeProduct).length > 0 && (
            <div key={activeProduct.id} className="product">
              <div>
                <img src={activeProduct.image_link} />
              </div>
              <p>{activeProduct.name}</p>
              <div className="buttons">
                <button onClick={() => handleAmountMinus(activeProduct)}>
                  -
                </button>
                {amount}
                <button onClick={() => setAmount(amount + 1)}>+</button>
              </div>
              <span>{activeProduct.price} €</span>
            </div>
          )}

          {Object.keys(activeProduct).length === 0 && (
            <>
              {products.map((product) => {
                return (
                  <div key={product.id} className="product">
                    <div>
                      <img src={product.image_link} />
                    </div>
                    <p>{product.name}</p>
                    <div className="buttons">
                      <button onClick={() => handleAmountMinus(product)}>
                        -
                      </button>
                      {amount}
                      <button onClick={() => setAmount(amount + 1)}>+</button>
                    </div>
                    <span>{product.price} €</span>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
