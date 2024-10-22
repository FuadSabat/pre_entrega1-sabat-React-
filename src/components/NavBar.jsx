// src/components/NavBar.jsx
import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Tu Store
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/electronica">
                Electrónica
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/indumentaria">
                Indumentaria
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/repuestos">
                Repuestos
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-nav ms-auto">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
