import Header from './components/Header'
import Footer from "./components/Footer"
import Main from './components/Main'
import Item from './components/Item'
import Form from './components/Form'
import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'


function App() {

    const titulo = "beldo"
    const footerData = {
        copyright: "Copyright © 2022",
        author: "Facundo Beldi",
        texto: "Texto descriptivo de la pagina"
    }
    const home_titulo = "Home"
    const array = ["EnlaceUno", "EnlaceDos", "EnlaceTres"]

    return (
        <BrowserRouter>
            <Header titulo={titulo} links={array} />
            <Main titulo={home_titulo} />
            <Footer data={footerData} />
        </BrowserRouter>
    )
}

export default App