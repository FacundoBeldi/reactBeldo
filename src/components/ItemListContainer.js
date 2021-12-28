import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {

    return (
        <div>
            <ItemCount initial={0} stock={10}  greeting={"Bienvenido!"} />
            {greeting}
        </div>
    )
}

export default ItemListContainer