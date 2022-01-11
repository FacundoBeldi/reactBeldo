import { Link } from "react-router-dom"

const Item = ({ producto }) => {

    const {title,price,image,id} = producto

    return (
        <article>
            <h2>{title}</h2>
            <img src={image}/>
            <p>${price}</p>
            <Link to={"/item/"+id}>Ver mas</Link>
        </article>
    )
}

export default Item

