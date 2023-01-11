import React from 'react'

const Categories = () => {
    const data = [
        {
            cateName: "COMBOS"
        },
        {
            cateName: "Bancos de Ejercicio"
        },
        {
            cateName: "Barras de Dominadas"
        },
        {
            cateName: "Paralelas Push Up"
        },
        {
            cateName: "Indumentaria"
        },
        {
            cateName: "Suplementos Deportivos",
        },
    ]
    return (
            <div className="category">
                {
                    data.map((value,index) => {
                        return(
                            <div className="box f_flex" key ={index}>
                                <span>{value.cateName}
                                </span>
                            </div>
                        )
                    } )
                }
            </div>
    )
}

export default Categories