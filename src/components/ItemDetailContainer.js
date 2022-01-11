import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

//Import imagenes

import producto1 from '../img/producto1.png'
import producto2 from '../img/producto2.png'
import producto3 from '../img/producto3.png'
import producto4 from '../img/producto4.png'
import producto5 from '../img/producto5.png'
import producto6 from '../img/producto6.png'
import producto7 from '../img/producto7.png'
import producto8 from '../img/producto8.png'
import producto9 from '../img/producto9.png'
import producto10 from '../img/producto10.png'

const productosIniciales = [
    { id: 1, nombre: "Producto 1", stock: 5, precio: 100, image: producto1},
    { id: 2, nombre: "Producto 2", stock: 5, precio: 150, image: producto2},
    { id: 3, nombre: "Producto 3", stock: 5, precio: 200, image: producto3},
    { id: 4, nombre: "Producto 4", stock: 5, precio: 250, image: producto4},
    { id: 5, nombre: "Producto 5", stock: 5, precio: 300, image: producto5},
    { id: 5, nombre: "Producto 6", stock: 5, precio: 350, image: producto6},
    { id: 5, nombre: "Producto 7", stock: 5, precio: 400, image: producto7},
    { id: 5, nombre: "Producto 8", stock: 5, precio: 450, image: producto8},
    { id: 5, nombre: "Producto 9", stock: 5, precio: 500, image: producto9},
    { id: 5, nombre: "Producto 10", stock: 5, precio: 600, image: producto10},
    ]


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const promesa = new Promise((res,rej)=>{
         setTimeout(()=>{
           res(productosIniciales) 
         },2000)
         })

         .then((res)=>{
           setProducto(res.find())
        })

        //const promesa = fetch('https://fakestoreapi.com/products/1')
        promesa
          //  .then(res => res.json())
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