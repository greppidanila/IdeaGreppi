import React from 'react'
import "./Header.css"

const Head = () => {
    return (
        <>
            <section className="head">
                <div className="container d_flex">
                    <div>
                        <i className='fa fa-envelope'></i>
                        <label> aguila.wearfitness@gmail.com</label>
                    </div>
                    <div> 
                        <label> 20% OFF si transferís o depositás en CBU (se descuenta al final de la compra)</label>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Head