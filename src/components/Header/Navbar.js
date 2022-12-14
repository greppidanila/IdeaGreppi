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
              Categorías <i className="fa fa-chevron-down"></i>
            </h4>
          </div>

          <div className="navlink">
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu (false)}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/cart">Cart</NavLink>
              </li>
              <li>
                <NavLink to="/checkout">Checkout</NavLink>
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