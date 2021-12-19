import Header from './components/Header'
import Footer from "./components/Footer"
import Main from './components/Main'

function App() {
    
    const titulo = "beldo"
    const footerData = {
        copyright : "Copyright © 2022",
        author : "Facundo Beldi",
        texto : "Texto descriptivo de la pagina"
    }

    const home_titulo = "Home"
    const array = ["EnlaceUno","EnlaceDos","EnlaceTres"]

    return (
        <>
            <Header titulo={titulo}  links={array}/>
            <Main titulo={home_titulo}/>
            <Footer data={footerData}/>
        </>
    )
}

export default App