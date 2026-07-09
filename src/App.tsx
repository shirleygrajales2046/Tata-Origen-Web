import {Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Recipes from "./pages/dashboard/Recipes";

function PublicLayout(){
  return(
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>

      <Route path="/" element={<PublicLayout />} />
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/dashboard/recipes" element={<Recipes />} />

    </Routes>
  );
}

export default App;