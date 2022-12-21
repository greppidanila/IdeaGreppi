import React from 'react'
import Categories from './Categories'
import Item from './Item'

const ItemListContainer = () => {
    const items = [
        {
            id: 1,
            title: "Banco Plegable",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
            cover: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/991/484/products/diseno-sin-titulo-31-4ae00d2a55eb81cc1616699028260866-480-0.png",
            price: 10000,
        },
        {
            id: 2,
            title: "Barra 3 en 1",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
            cover: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/991/484/products/anadir-un-titulo-11-30bdaebc17c4e26fe016618234673841-480-0.png",
            price: 10000,
        },
        {
            id: 3,
            title: "Banco de Pecho equipado con Pesas",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
            cover: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/991/484/products/combo-video-cuadrado-21-6741cfb52f6a12283816699027205120-480-0.png",
            price: 10000,
        },
        {
            id: 4,
            title: "Mancuernas de hierro engomadas",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
            cover: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/991/484/products/img_539321-01cb047322af7aa19b16611249861920-480-0.jpg",
            price: 10000,
        },
        {
            id: 5,
            title: "Paralelas Calistenia",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
            cover: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/991/484/products/img_175711-3c3698f98e430607b316583553618772-480-0.jpg",
            price: 10000,
        },
    ]
    return (
        <>
            <section className="home">
                <div className="container d_flex">
                    <Categories/>
                    {items.map(({id, title, desc,cover, price}) => (
                        <Item key={id} id={id} title={title} desc={desc} cover={cover} price={price}/>
                    ))}
                </div>
            </section>
        </>
    )
}

export default ItemListContainer
