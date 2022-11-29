import { Routes, Route, NavLink } from "react-router-dom";
import { PageAboutUs } from "./PageAboutUs";
import { PageKontakt } from "./PageKontakt";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaSpinner } from "react-icons/fa";

const url = "http://makeup-api.herokuapp.com/api/v1/products.json";
//const productsUrl = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`;

export const PageBrands = () => {
  const [amount, setAmount] = useState(0);
  const [products, setProducts] = useState<any[]>([]);
  const [brands, setBrands] = useState<any[]>([]);
  const [activeBrand, setActiveBrand] = useState<any>({});

  const getBrands = (products: any[]) => {
    let brands: any = [];
    products.forEach((product) => {
      if (!brands.includes(product.brand)) {
        brands.push(product.brand);
      }
    });
    setBrands(brands);
  };
  const productsFilter = (products: any[], filter1: string) => {
    let filteredProduct: any[] = [];
    products.forEach((product) => {
      if (product === filter1) {
        filteredProduct.push(product);
      }
    });
    setProducts(filteredProduct);
  };

  useEffect(() => {
    (async () => {
      const _products = (await axios.get(url)).data;
      console.log(_products);
      getBrands(_products);
      productsFilter(_products, activeBrand);
    })();
  }, []);

  const handleAmountMinus = (product: any) => {
    if (amount > 0 && product.id) {
      setAmount(amount - 1);
    }
  };
  const handleDropDownChoice = (e: any) => {
    console.log(e);
  };
  return (
    <div className="pageBrands">
      <div className="container">
        <h2>There are {products.length}</h2>
        <ul className="brands">
          <DropdownButton
            id="dropdown-basic-button"
            title="MENU"
            onClick={handleDropDownChoice}
          >
            {brands.length > 0 ? (
              <>
                {brands.map((brand: any, i: any) => {
                  return (
                    <Dropdown.Item value={brand.brand} key={i}>
                      {brand}
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
    </div>
  );
};
