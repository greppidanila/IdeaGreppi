import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "./logoawf.svg";
import './Navbar.css'

const Navbar = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-1 text-center">
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
                  Log in
                </a>
              </li>
              <li className="nav-item">
                <a href="#Texto2" className="nav-link">
                  Lista de deseados
                </a>
              </li>
              <li className="nav-item">
                <a href="#Texto3" className="nav-link">
                  Nosotros
                </a>
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;