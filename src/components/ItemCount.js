import { useState } from "react"

const ItemCount = ({greeting, stock , initial }) => {

const [ contador, setContador ] = useState(initial);

const sumar = () => {
    if (contador < stock){
        setContador(contador + 1)
    }
}

const restar = () => {
    if (contador > initial){
        setContador(contador - 1)
    }
}

const resetearContador = () => {
    setContador(0)
}

return (
    <div>
        {greeting}
        <p>Carrito : {contador}</p>
        <button onClick={sumar}>Agregar al carrito</button>
        <button onClick={resetearContador}>Resetear</button>
        <button onClick={restar}>Quitar del carrito</button>
    </div>
)
}
export default ItemCount;