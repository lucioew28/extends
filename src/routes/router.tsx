import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./App.routes";

export default function Router() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
