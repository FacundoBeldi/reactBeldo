import { useState } from "react"


const ItemListContainer = ({greeting, stock , initial , onAdd }) => {

    const [contador, setContador] = useState(initial)
    const [toggle, setToggle] = useState(false)
    
    const aumentarContador = () => {
        setContador(contador + 1)
    }

    const disminuirContador = () => {
        setContador(contador - 1)
    }

    const resetearContador = () => {
        setContador(0)
    }
    
    return (
        <div>
            {greeting}
            <p>Carrito : {contador}</p>
            <button onClick={aumentarContador}>Agregar al carrito</button>
            <button onClick={resetearContador}>Resetear</button>
            <button onClick={disminuirContador}>Quitar del carrito</button>
        </div>
    )
}

export default ItemListContainer