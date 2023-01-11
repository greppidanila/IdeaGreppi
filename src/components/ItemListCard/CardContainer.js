import React from 'react'
import Card from './Card'

const CardContainer = ({productItems, addToCart}) => {
  return (
    <>
      <section className="flash background">
        <div className="container">
          <div className="heading f_flex">
            <i className="fa fa-bolt"></i>
            <h1 className="">Artículos</h1>
          </div>
          <Card productItems={productItems} addToCart={addToCart}/>
        </div>
      </section>
    </>
  )
}

export default CardContainer