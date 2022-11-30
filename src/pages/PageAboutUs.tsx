import { Routes, Route, NavLink } from "react-router-dom";
import { PageMitte } from "./PageMitte";
import { PagePageBrandenburgGate } from "./PagePageBrandenburgGate";
import { PagePageCheckpointCharlie } from "./PagePageCheckpointCharlie";
import { PagePageUnterDenLinden } from "./PagePageUnterDenLinden";
import { PageSteglitz } from "./PageSteglitz";
import { PageTiergarten } from "./PageTiergarten";
export const PageAboutUs = () => {
  return (
    <>
      <p>welcome to the Berlin page</p>
      <nav>
        <NavLink to="tiergarten">Tiergarten</NavLink>
        <NavLink to="steglitz">Steglitz</NavLink>
        <NavLink to="mitte">Mitte</NavLink>
      </nav>
      <Routes>
        <Route path="tiergarten" element={<PageTiergarten />} />
        <Route path="steglitz" element={<PageSteglitz />} />
        <Route path="mitte/*" element={<PageMitte />}>
          <Route
            path="checkpointCharlie"
            element={<PagePageCheckpointCharlie />}
          />
          <Route path="brandenburgGate" element={<PagePageBrandenburgGate />} />
          <Route path="unterDenLinden" element={<PagePageUnterDenLinden />} />
        </Route>
      </Routes>
    </>
  );
};
