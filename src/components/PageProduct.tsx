import { useParams } from "react-router-dom";

export default function PageProduct() {
  const { id } = useParams();
  return <div>PageProduct: {id}</div>;
}
