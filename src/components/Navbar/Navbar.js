import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "./logoawf.svg";
import './Navbar.css'

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-light py-1 text-center">
        <div className="container">          
          <a href="#Texto1" className="navbar-brand">
            <img src={Logo} alt="logoawf" className="p-0 m-0 logo-img"/>            
          </a>                    
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#Texto1" className="nav-link">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a href="#Texto2" className="nav-link">
                  Quienes somos
                </a>
              </li>
              <li className="nav-item">
                <a href="#Texto2" className="nav-link">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  <CartWidget />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;