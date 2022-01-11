import ItemCount from "./ItemCount"

const ItemDetail = ({producto}) => {
    const {title,price,image,description} = producto

    return (
        <div>
            <h2>{title}</h2>
            <img src={image}/>
            <p>${price}</p>
            <p>{description}</p>
            <ItemCount initial={0}/>
            <button>Confimar</button>
        </div>
    )
}

export default ItemDetail