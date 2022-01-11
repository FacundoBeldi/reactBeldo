import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import Nav from "./Nav"
import "../header.css"

function Header ({ titulo , links }) {
    return (
        <header>
            <div>
                <Link to="/haciaunlugar">
                <h1><img src="/logotipomod.png" alt="logo" />{titulo}</h1>
                </Link>
            </div>
            <Nav links={links}/>  
        </header>
    )
}

export default Header