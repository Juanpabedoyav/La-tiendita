import React, { useState } from 'react'
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import {ButtonContainer} from '../styles/Registro.styles'

const Registro = () => {
const [registro, setRegistro] = useState({
    nombre : "",
    precio : "",
    imgane : ""
})


const handleChange = ({target}) =>{

    setRegistro({
        ...registro,
        [target.name]: target.value
    })
    console.log(registro);
} 
const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("me lo enviaste");
}


const crear = async()=>{
    await fetch("https://latienda2021.herokuapp.com/populares",{
        method : 'POST',
        body: JSON.stringify(registro),
        header:{
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
}
return (
<div>
    <FloatingLabel onSubmit={handleSubmit}  controlId="floatingInput" label="Nombre del producto" className="mb-3">
        <Form.Control type="text" name="nombre" placeholder="Nombre del producto" className="inputFocus input"
            onChange={handleChange} />
    </FloatingLabel>
    <FloatingLabel controlId="floatingInput" label="Precio" className="mb-3">
        <Form.Control type="email" name="precio" placeholder="Precio" className="inputFocus input"
            onChange={handleChange} />
    </FloatingLabel>
    <FloatingLabel controlId="floatingPassword" label="Url Imagen">
        <Form.Control type="text" name="imagen" placeholder="Url Imagen" className="inputFocus input"
            onChange={handleChange} />
    </FloatingLabel>
    <ButtonContainer>
        <Button className='boton' type="submit" onClick={crear}>Crear</Button>
        <Button className='boton' type="button" >Borrar</Button>
        <Button className='boton' type="button" >Actualizar</Button>

    </ButtonContainer>

</div>
)
}

export default Registro