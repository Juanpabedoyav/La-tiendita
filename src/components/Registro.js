import React, { useState } from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import { ButtonContainer } from "../styles/Registro.styles";

const Registro = () => {
  const [registro, setRegistro] = useState({
    id: 0,
    nombre: "",
    precio: "",
    imagen: "",
  });

  const [url, setUrl] = useState("");

  const handleChange = ({ target }) => {
    setRegistro({
      ...registro,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (e) => e.preventDefault();

  const crear = async () => {
    await fetch("https://latienda2021.herokuapp.com/populares", {
      method: "POST",
      body: JSON.stringify(registro),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
    console.log(registro);
  };

  const actualizar = async () => {
    let resp = await fetch("https://latienda2021.herokuapp.com/ofertas");
    let ofertas = await resp.json();
    let resp2 = await fetch("https://latienda2021.herokuapp.com/populares");
    let populares = await resp2.json();

    const dataO = ofertas.find(
      (el) => el.nombre.toLowerCase() === registro.nombre.toLowerCase()
    );

    const dataP = populares.find(
      (el) => el.nombre.toLowerCase() === registro.nombre.toLowerCase()
    );

    if (dataO !== undefined) {
      setRegistro(dataO);

      setUrl("https://latienda2021.herokuapp.com/ofertas/");
    } else {
      setRegistro(dataP);

      setUrl("https://latienda2021.herokuapp.com/populares/");
    }
  };

  const handleModificarDatos = async () => {
    await fetch(url + registro.id, {
      method: "PUT",
      body: JSON.stringify(registro),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });

    alert("Producto actualizado con éxito");
  };

  return (
    <div>
      <FloatingLabel
        onSubmit={handleSubmit}
        controlId="floatingInput"
        label="Nombre del producto"
        className="mb-3"
      >
        <Form.Control
          type="text"
          name="nombre"
          placeholder="Nombre del producto"
          className="inputFocus input"
          onChange={handleChange}
          value={registro.nombre}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Precio" className="mb-3">
        <Form.Control
          type="email"
          name="precio"
          placeholder="Precio"
          className="inputFocus input"
          onChange={handleChange}
          value={registro.precio}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Url Imagen">
        <Form.Control
          type="text"
          name="imagen"
          placeholder="Url Imagen"
          className="inputFocus input"
          onChange={handleChange}
          value={registro.imagen}
        />
      </FloatingLabel>
      <ButtonContainer>
        <Button className="boton" type="submit" onClick={crear}>
          Crear
        </Button>
        <Button className="boton" type="button" onClick={actualizar}>
          Buscar
        </Button>
        <Button className="boton" type="button" onClick={handleModificarDatos}>
          Actualizar
        </Button>
      </ButtonContainer>
    </div>
  );
};

export default Registro;
