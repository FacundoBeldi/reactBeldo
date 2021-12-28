import CartWidget from "./CartWidget"
import Nav from "./Nav"

function Header ({ titulo , links }) {
    return (
        <header>
            <div>
                <h1><img src="/logotipomod.png" alt="logo" />{titulo}</h1>
            </div>
            <Nav links={links}/>  
        </header>
    )
}

export default Header