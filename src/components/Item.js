import React, { useState } from 'react'

const Item = ({ item }) => {

    const {nombre, precio, id} = item;

    return (
        <div>
            <ul>
                <li>{nombre}</li>
                <li>${precio}</li>
                <button type="button">
                    Agregar al carrito
                </button>
            </ul>
        </div>
    )
}

export default Item

