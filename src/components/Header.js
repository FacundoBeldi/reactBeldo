import Nav from "./Nav"

function Header ({ titulo , links }) {
    return (
        <header>
            <div>
                <img src="/logo192.png" alt="logo" />
                <h1>{titulo}</h1>
            </div>
            <Nav links={links} />  
        </header>
    )
}

export default Header