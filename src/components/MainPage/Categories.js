import React from 'react'

const Categories = () => {
    const data = [
        {
            cateImg: "../assets/images/category1.png",
            cateName: "COMBOS"
        },
        {
            cateImg: "../assets/images/category1.png",
            cateName: "Bancos de Ejercicio",
            cateSubName: ["Banco Plegable con rack", "Banco Multiangular", "Banco Plano"]
        },
        {
            cateImg: "../assets/images/category1.png",
            cateName: "Barras de Dominadas"
        },
        {
            cateImg: "../assets/images/category1.png",
            cateName: "Paralelas Push Up"
        },
        {
            cateImg: "../assets/images/category1.png",
            cateName: "Indumentaria"
        },
        {
            cateImg: "../assets/images/category1.png",
            cateName: "Suplementos Deportivos",
        },
    ]
    return (
            <div className="category">
                {
                    data.map((value,index) => {
                        return(
                            <div className="box f_flex" key ={index}>
                                <img src={value.cateImg} alt="" />
                                <span> {value.cateName}</span>
                            </div>
                        )
                    } )
                }
            </div>
    )
}

export default Categories