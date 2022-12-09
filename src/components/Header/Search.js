import React from 'react'
import "./Header.css"
import logo from "../assets/logo.svg"
import {Link} from "react-router-dom"

const Search = () => {
    // fijar Header
    window.addEventListener("scroll", function () {
        const search = document.querySelector(".search")
        search.classList.toggle("active", window.scrollY > 100)
    })

    return (
        <div>
            <section className="search">
                <div className="container c_flex">
                    <div className="logo width">
                        <img src={logo} alt="logo de aguila" />
                    </div>

                    <div className='search-box f_flex'>
                        <i className='fa fa-search'></i>
                        <input type='text' placeholder='Buscá tu producto...' />
                        <span>Buscar</span>
                    </div>

                    <div className='icon f_flex width'>
                        <i className='fa fa-user icon-circle'></i>
                        <div className='cart'>
                            <Link to='/cart'>
                                <i className="fa icon-circle fa-sharp fa-solid fa-cart-shopping"></i>
                                {/* <span>{CartWidget.length === 0 ? "" : CartWidget.length}</span> */}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

// { CartWidget } dentro de () fn

export default Search