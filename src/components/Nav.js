import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const Nav = ({ links }) => {
    return (  
        <nav>
            <CartWidget />
            {links.map((elemento, indice) => {
                return <Link to={`/categoria/${elemento}`}>{elemento}</Link>
            })}
        </nav> 
    )
}

export default Nav