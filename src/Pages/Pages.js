import React from 'react'
import CardContainer from '../components/ItemListCard/CardContainer'
import Home from '../components/MainPage/Home'

const Pages = ({productItems, cartItem, addToCart}) => {
  return (
    <div>
        <Home cartItem={cartItem}  />
        <CardContainer productItems={productItems} addToCart={addToCart}/>
    </div>
  )
}

export default Pages