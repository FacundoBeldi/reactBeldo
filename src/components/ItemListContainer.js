import { useEffect, useState } from "react";
import ItemList from './ItemList'
import { useParams } from "react-router-dom";

//const productosIniciales = [
//  { id: 1, nombre: "Producto 1", stock: 5, precio: 100 },
//{ id: 2, nombre: "Producto 2", stock: 5, precio: 150 },
//{ id: 3, nombre: "Producto 3", stock: 5, precio: 200 },
//{ id: 4, nombre: "Producto 4", stock: 5, precio: 250 },
//{ id: 5, nombre: "Producto 5", stock: 5, precio: 300 },
//]

const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        if (id) {
            console.log("acasa" + id)
        } else {
            console.log("Aca")
        }

        //const promesa = new Promise((res,rej)=>{
        // setTimeout(()=>{
        //   res(productosIniciales) 
        // },5000)
        // })

        const promesa = fetch('https://fakestoreapi.com/products')

        promesa
            .then(res => res.json())
            .then((productos) => {
                setLoading(false)
                setProductos(productos)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const onAdd = () => { }

    return (
        <ItemList productos={productos} />
    )
}

export default ItemListContainer