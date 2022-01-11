import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const Nav = ({ links }) => {
    return (  
        <nav> 
            {links.map((elemento, indice) => {
                return <Link to={`/categoria/${elemento}`}>{elemento}</Link>
            })}
            <CartWidget />
        </nav> 
    )
}

export default Nav