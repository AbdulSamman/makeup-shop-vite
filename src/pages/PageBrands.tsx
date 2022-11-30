import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaSpinner } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { Products } from "../components/Products";

export const PageBrands = () => {
  const { brands, handleDropDownChoice } = useContext(AppContext);

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
        <Products />
      </div>
    </div>
  );
};
