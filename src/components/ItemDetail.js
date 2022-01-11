import ItemCount from "./ItemCount"

const ItemDetail = ({producto}) => {
    const {nombre,precio,image,stock} = producto

    return (
        <div>
            <h2>{nombre}</h2>
            <img src={image}/>
            <h3>${precio}</h3>
            <p>{stock}</p>
            <ItemCount initial={0}/>
            <button>Confimar</button>
        </div>
    )
}

export default ItemDetail