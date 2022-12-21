import React from 'react'

const Cart = () => {

    return (
        <div className="absolute w-full h-full">
            <div className="mt-5 flex justify-center items-center">
                <h1 className="text-xl text-center font-bold h-screen flex flex-col items-center justify-center p-7 md:text-2xl">
                Tus Productos:{" "}
                </h1>
            </div>
            <div className="text-xl text-center font-bold h-screen flex flex-col items-center justify-center p-7 md:text-2xl">
                Todavía no agregaste ningún producto
            </div>
        </div>
    );
};

export default Cart;