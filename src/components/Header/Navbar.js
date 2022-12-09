import React, { useState } from "react"
import {Link} from "react-router-dom"

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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/faqs">Preguntas Frecuentes</Link>
              </li>
              <li>
                <Link to="/whoWeAre">Quiénes Somos</Link>
              </li>
              <li>
                <Link to="/track">Seguimiento de pedido</Link>
              </li>
              <li>
                <Link to="/contact">Contacto</Link>
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