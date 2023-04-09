import React from "react";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Recipe from "./pages/Recipe";
import About from "./components/about/About";

const App: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipe category={category} />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  );
};

export default App;
