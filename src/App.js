import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import Faq from "./pages/Faq";
import Tarifs from "./pages/Tarifs";
const App = () => {
  return (
    <div class="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Acceuil />} />
          <Route path="/faq" exact element={<Faq />} />
          <Route path="/tarifs" exact element={<Tarifs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
