import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {

    const {id, title, desc,cover, price} = props

    return (
        <Link style={{textDecoration:'none',color:'black'}}  to={`/item/detail/${id}`}>                       
            <div class="card" style={{width: "18rem"}} >
                <img src={cover} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{desc}</p>
                    <div classNameName="last_buttons">
                        <div classNameName="money_bag">
                            <h3>$ {price}</h3> 
                            <button type="button" className="btn btn-primary">Ver detalles</button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Item