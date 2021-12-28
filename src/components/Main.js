import ItemCount from "./ItemCount"
import CartWidget from "./CartWidget"
import ItemListContainer from "./ItemListContainer"

const Main = ({titulo}) => {
    return (
        <main>
            <header>
            <h2>{titulo}</h2>
            <CartWidget />
            <ItemListContainer greeting={"Bienvenido!"} />
            </header>
        </main>
    )
}

export default Main