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

const confirmarCantidad = () => {
    console.log(`Confirmando cantidad: ${contador}`)
    //onAdd(contador)
}

return (
    <div>
        <p>Carrito : {contador}</p>
        <button onClick={sumar}>Agregar al carrito</button>
        <button onClick={confirmarCantidad}>Confirmar</button>
        <button onClick={restar}>Quitar del carrito</button>
    </div>
)
}
export default ItemCount;