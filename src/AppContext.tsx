import { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";

// interface IAppContext {
// 	appTitle: string;
// 	products: IBook[];
// 	flashcards: IFlashcard[],
// 	handleToggleFlashcard: (arg0: IFlashcard) => void
// }

// interface IAppProvider {
// 	children: React.ReactNode;
// }

const url = "http://makeup-api.herokuapp.com/api/v1/products.json";

export const AppContext = createContext<any>({} as any);

export const AppProvider: React.FC<any> = ({ children }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [cart, setCart] = useState<any>({ items: [] });

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
        product.amount = 1;
      });

      loadBrands(_products);
      setProducts(_products);
    })();
  }, []);

  const handleAmountMinus = (product: any) => {
    product.amount--;
    if (product.amount < 1) {
      product.amount = 1;
    }
    setProducts([...products]);
  };

  const handleAmountPlus = (product: any) => {
    product.amount++;
    if (product.amount > 32) {
      product.amount = 32;
    }
    setProducts([...products]);
  };

  const handleDropDownChoice = (e: any) => {
    const brand = e.target.innerHTML;
    const _filteredProducts: any = products.filter(
      (m: any) => m.brand === brand
    );
    setFilteredProducts(_filteredProducts);
  };

  const addToCart = (product: any) => {
    if (
      !cart.items.includes(product) &&
      product.id !== undefined &&
      product.price > 0.0
    ) {
      cart.items.push(product);
    }

    setCart({ ...cart });
  };

  return (
    <AppContext.Provider
      value={{
        products,
        brands,
        filteredProducts,
        setProducts,
        setFilteredProducts,
        addToCart,
        cart,
        handleAmountMinus,
        handleAmountPlus,
        handleDropDownChoice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
