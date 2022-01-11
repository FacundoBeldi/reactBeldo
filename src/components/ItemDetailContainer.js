import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

//const productosIniciales = [
//{ id: 1, nombre: "Producto 1", stock: 5, precio: 100 },
//{ id: 2, nombre: "Producto 2", stock: 5, precio: 150 },
//{ id: 3, nombre: "Producto 3", stock: 5, precio: 200 },
//{ id: 4, nombre: "Producto 4", stock: 5, precio: 250 },
//{ id: 5, nombre: "Producto 5", stock: 5, precio: 300 },
//]

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //const promesa = new Promise((res,rej)=>{
        // setTimeout(()=>{
        //   res(productosIniciales) 
        // },5000)
        // })

        // .then((res)=>{
        //   setProducto(res.find())
        //})

        const promesa = fetch('https://fakestoreapi.com/products/1')
        promesa
            .then(res => res.json())
            .then((productos) => {
                setLoading(false)
                setProducto(producto)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer