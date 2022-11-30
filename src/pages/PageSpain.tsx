import { useParams, NavLink, Outlet } from "react-router-dom";
import cities from "../data/cities.json";

export const PageSpain = () => {
  const { id } = useParams();
  const city = cities.find((m) => String(m.id) === String(id));
  return (
    <div>
      <p>welcome to the Spain page</p>

      <Outlet context={city} />
    </div>
  );
};
