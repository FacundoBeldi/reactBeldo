import { Link } from "react-router-dom"

const Item = ({ producto }) => {

    const {nombre,precio,stock,image,id} = producto

    return (
        <article className="Productos">
            <h2>{nombre}</h2>
            <img src={image}/>
            <h3>${precio}</h3>
            <p>Stock:{stock}</p>
            <Link to={"/item/"+id}>Ver mas</Link>
        </article>
    )
}

export default Item

