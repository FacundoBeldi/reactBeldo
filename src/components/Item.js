import React, { useState } from 'react'

const Item = ({ planes }) => {

    const {nombre, precio, id} = planes;

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

