import CartWidget from "./CartWidget"

const Nav = ({ links }) => {
    return (  
        <nav>
            <CartWidget />
            {links.map((elemento, indice) => {
                return <a href={`/${elemento}`}>{elemento}</a>
            })}
        </nav> 
    )
}

export default Nav