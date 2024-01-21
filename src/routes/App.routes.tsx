import { Route, Routes } from "react-router-dom";

import ComponentsPage from "@/pages/ComponentsPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ComponentsPage />} />
    </Routes>
  );
}
