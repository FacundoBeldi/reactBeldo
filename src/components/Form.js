import { useState } from "react"

const Form = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [usuarios, setUsuarios] = useState([])

    const handleClick = (e) => {
    }

    const handleChangeApellido = (e) => {
        setApellido(e.target.value)
    }
    
    const handleChangeNombre = (e) => {
        setNombre(e.target.value)
    }

    const handleKeyDown = (e) => {
        console.log(e.key)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const usuario_nuevo = { nombre, apellido}
        setUsuarios([...usuarios, usuario_nuevo])
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onKeyDown={handleKeyDown} onChange={handleChangeNombre} placeholder='nombre' />
                <input onKeyDown={handleKeyDown} onChange={handleChangeApellido} placeholder='apellido' />
                <button id="submit" onClick={handleClick}>click</button>
            </form>
            {usuarios.map((usuario, index) => {
                return (
                    <div key={index}>
                        <p>{usuario.nombre} {usuario.apellido}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Form
