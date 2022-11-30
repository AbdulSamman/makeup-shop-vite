import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContext";

export default function PageProduct() {
  const { products } = useContext(AppContext);
  const { id } = useParams();

  const product = products.find((m: any) => String(m.id) === String(id));

  return <div>PageProduct: {product.id}</div>;
}
