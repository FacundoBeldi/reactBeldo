import ItemListContainer from "./ItemListContainer"

const Main = ({titulo}) => {
    return (
        <main>
            <header>
                <h2>{titulo}</h2>
            </header>
            <ItemListContainer greeting={"Bienvenido!"}/>
        </main>
    )
}

export default Main