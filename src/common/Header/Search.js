import React from 'react'
import logo from "../assets/logos/logo.svg"
import {Link} from "react-router-dom"

const Search = ({cartItem}) => {
    // fijar Header
    window.addEventListener("scroll", function () {
        const search = document.querySelector(".search")
        search.classList.toggle("active", window.scrollY > 100)
    })

    return (
        <>
            <section className="search">
                <div className="container c_flex">
                    <div className="logo width">
                    <img src={logo} alt="logo de aguila"/>
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
                                <i className="fa icon-circle fa-shopping-bag"></i>
                                <span>{cartItem.length === 0 ? "" : cartItem.length } </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

// { CartWidget } dentro de () fn

export default Search