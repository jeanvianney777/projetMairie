import React from "react";
import Navigation from "../components/Navigation";
import "../styles/Connexion.css";
const Inscription = () => {
  return (
    <div>
      <Navigation />
      <div class="divlogin">
        <h1 class="h1prem">
          INSCRIPTION <hr class="hrTitre" />
        </h1>
        <div class="stepDiv">
          <button class="step1 btfocus">Etape 1</button>
          <button class="step2 btfocus">Etape 2</button>
          <button class="step3 btfocus">Etape 3</button>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
