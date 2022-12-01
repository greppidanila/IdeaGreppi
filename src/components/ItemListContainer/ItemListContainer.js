import React from "react";
import './ItemListContainer.css';

const ItemListContainer = (props) => {
    const {greeting} = props;
    return (
    <div className="item-list-container">
        <div>
            <p className="m-2 fs-5 badge text-wrap">Bienvenida {greeting}!</p>
        </div>
    </div>
    );
};

export default ItemListContainer;