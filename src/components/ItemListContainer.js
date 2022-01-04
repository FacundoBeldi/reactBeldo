import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {

    const [planes, setPlanes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                console.log("Soy el timeout")
                res(planes) 
            },5000)
        })

        promesa.then((planes)=>{
            console.log("Todo bien")
            console.log(planes)
            setLoading(false)
            setPlanes(planes)
        })
    },[])

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