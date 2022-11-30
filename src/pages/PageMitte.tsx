import { Routes, Route, NavLink, Outlet } from "react-router-dom";

export const PageMitte = () => {
  return (
    <>
      <p>welcome to the Mitte page</p>
      <nav>
        <NavLink to="checkpointCharlie">Checkpoint Charlie</NavLink>
        <NavLink to="brandenburgGate">Brandenburg Gate</NavLink>
        <NavLink to="unterDenLinden">unter Den Linden</NavLink>
      </nav>

      <Outlet />
    </>
  );
};
