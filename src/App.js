import Header from './components/Header'
import Footer from "./components/Footer"
import Main from './components/Main'
import Item from './components/Item'
import React, { useState } from 'react'


function App() {

    const[planes, setPlanes] = useState ([
        {id: 1, nombre: 'Plan Uno', precio: 100 },
        {id: 2, nombre: 'Plan Dos', precio: 150 },
        {id: 3, nombre: 'Plan Tres', precio: 200 },
        {id: 4, nombre: 'Plan Cuatro', precio: 250 },
        {id: 5, nombre: 'Plan Cinco', precio: 300 },
        {id: 6, nombre: 'Plan Seis', precio: 350 }
    ])
    
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
            <h3>Planes</h3>
            {planes.map((item) => (
                <Item
            item={item}
            />
            ))}
            <Footer data={footerData}/>
        </>
    )
}

export default App