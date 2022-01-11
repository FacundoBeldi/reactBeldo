import CartWidget from "./CartWidget"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from './ItemDetailContainer'
import { Routes, Route } from "react-router-dom"

const Main = ({ titulo }) => {
    return (
        <main>
            <header>
                <h2>{titulo}</h2>
            </header>
           
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:id" element={<ItemListContainer/>} />
                <Route path="/item/:id" element={<ItemDetailContainer/>} />
                <Route path="/carrito/" element="" />
            </Routes>
        </main>
    )
}

export default Main