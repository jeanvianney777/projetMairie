import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../styles/style.css";
const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="uli">
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li className="li1">Accueil</li>
        </NavLink>
        <div class="dropdown">
          <button
            class="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Etats civils
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#">
                Actes de Naissance
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Actes de Mariage
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Actes de décès
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Certification de Documement
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Légalisation de Signature
              </a>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <button
            class="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Actes de Justice
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#">
                Certificats de Nationalité
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Casiers Judiciaires
              </a>
            </li>
          </ul>
        </div>
        <NavLink
          to="/faq"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="li1">FAQ</li>
        </NavLink>
        <NavLink
          to="/tarifs"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li className="li1">Tarifs</li>
        </NavLink>
        <div class="dropdown">
          <button
            class="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton3"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faUser} /> Connexion
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#">
                Connexion
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Inscription
              </a>
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
