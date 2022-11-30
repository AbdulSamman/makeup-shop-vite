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

  return (
    <AppContext.Provider
      value={{
        products,
        brands,
        filteredProducts,
        setProducts,
        setFilteredProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
