import { Route, Routes } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import RootLayout from "@/components/RootLayout";
import Nav from "@/components/Nav";
import TreePage from "@/pages/Tree";

import MapPage from "@/pages/map";

export default function AppRoutes() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="components" element={<RootLayout />}>
          <Route path="tree" element={<TreePage />} />
          <Route path="map" element={<MapPage />} />
        </Route>
      </Routes>
    </>
  );
}
