import { useOutletContext } from "react-router-dom";
export const PageCity = () => {
  const city: any = useOutletContext();
  return (
    <div className="city">
      <div className="name">{city.name}</div>
      <div className="description">{city.description}</div>
    </div>
  );
};
