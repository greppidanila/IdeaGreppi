import React from "react"


const Head = () => {
    return (
        <>
            <section className="head">
                <div className="container d_flex">
                    <div className="left row">
                        <i className="fa fa-phone"></i>
                        <label> +54 9 11 6496-5403</label>
                        <i className="fa fa-envelope"></i>
                        <label> aguila.wearfitness@gmail.com</label>
                    </div>
                    <div className="right row RText">
                        <label>FAQs</label>
                        <label>Necesitas Ayuda?</label>
                        <span>🏳️</span>
                        <label htmlFor="">EN</label>
                        <span>🏳️</span>
                        <label htmlFor="">USD</label>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Head