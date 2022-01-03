import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log("Soy un efecto")
        setTimeout(() => {
            console.log("Soy el timeout")
            setLoading(false)
        }, 2000)
    }, [])

    const onAdd = () => { }

    if (loading) {
        return (
            <div>
                <p>Cargando...</p>
                <ItemCount initial={0} stock={8} onAdd={onAdd} />
                {greeting}
            </div>
        )
    } else {
        return (
            <div>
                <ItemCount initial={0} stock={8} onAdd={onAdd} />
                {greeting}
            </div>
        )
    }
}

    export default ItemListContainer