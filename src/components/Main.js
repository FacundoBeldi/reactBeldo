import ItemCount from "./ItemCount"

const Main = ({titulo}) => {
    return (
        <main>
            <header>
                <h2>{titulo}</h2>
                <ItemCount initial={0} stock={10}  greeting={"Bienvenido!"} />
            </header>
        </main>
    )
}

export default Main