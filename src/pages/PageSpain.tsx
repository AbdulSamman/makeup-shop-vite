import { useParams, NavLink, Outlet } from "react-router-dom";

export const PageSpain = () => {
  const { id } = useParams();

  return (
    <div>
      <p>welcome to the Spain page</p>
    </div>
  );
};
