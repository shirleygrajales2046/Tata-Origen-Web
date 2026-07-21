import {Routes, Route} from "react-router-dom";

import DashboardLayout from "./components/layouts/DashboardLayout";
import PublicLayout from "./components/layouts/PublicLayout";

import Home from "./pages/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import ProductsPage from "./pages/dashboard/products/ProductsPage";
import RecipesPage from "./pages/dashboard/recipes/RecipesPage";

function App() {
  return (
      <Routes>
        {/* Página pública */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Dashboard */}
        <Route path="/dashboard" element={<DashboardLayout />}>

          <Route index element={<Dashboard />} />

          <Route
            path="productos"
            element={<ProductsPage />}
          />

          <Route
            path="ingredientes"
            element={<RecipesPage />}
          />
        </Route>
      </Routes>
  );
}

export default App;