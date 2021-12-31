import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import Item from "./Item";

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
                <Item />
                {greeting}
            </div>
        )
    } else {
        return (
            <div>
                <ItemCount initial={0} stock={8} onAdd={onAdd} />
                <Item />
                {greeting}
            </div>
        )
    }
}

    export default ItemListContainer