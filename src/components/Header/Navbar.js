import React, { useState } from "react"
import {NavLink} from "react-router-dom"

const Navbar = () => {

  const [MobileMenu, setMobileMenu] = useState(false)

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="categories d_flex">
            <span class="fa-solid fa-border-all"></span>
            <h4>
              Categorías 
            </h4>
          </div>

          <div className="navlink">
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu (false)}>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/">All Products</NavLink>
              </li>
              <li>
                <NavLink to="/cart">Carrito</NavLink>
              </li>
              <li>
                <NavLink to="/track">Seguimiento de pedido</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contacto</NavLink>
              </li>
            </ul>

            <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className="fas fa-times close home-btn"></i> : <i className="fas fa-bars open"></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar