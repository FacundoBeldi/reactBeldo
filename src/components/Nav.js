const Nav = ({ links }) => {
    return (
        <nav>
            <span class="material-icons">
                shopping_cart
            </span>
            {links.map((elemento, indice) => {
                return <a href={`/${elemento}`}>{elemento}</a>
            })}
        </nav>
    )
}

export default Nav