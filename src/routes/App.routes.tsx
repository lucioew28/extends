import { Route, Routes } from "react-router-dom";

import ComponentsPage from "@/pages/ComponentsPage";
import HomePage from "@/pages/HomePage";
import RootLayout from "@/components/RootLayout";
import DocsPage from "@/pages/DocsPage";

export default function AppRoutes() {
  return (
    // <Routes>
    //   <Route path="/" element={<RootLayout />}>
    //     <Route index element={<HomePage />} />
    //     <Route path="docs" element={<DocsPage />} />
    //     <Route path="docs/tree" element={<ComponentsPage />} />
    //   </Route>
    // </Routes>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="docs" element={<RootLayout />}>
        <Route index element={<DocsPage />} />
        <Route path="tree" element={<ComponentsPage />} />
      </Route>
    </Routes>
  );
}
