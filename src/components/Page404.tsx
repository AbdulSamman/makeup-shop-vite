import { useLocation } from "react-router-dom";
export const Page404 = () => {
  const location = useLocation();
  return (
    <div className="page404">
      <p>
        Page <code>{location.pathname}</code> doesn't exist
      </p>
    </div>
  );
};
