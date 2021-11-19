import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {MainStyles} from '../styles/Main.styles';

function Main() {
  const [data, setData] = useState([])
  
  const getData = async () => {
    const response = await fetch(
      "https://latienda2021.herokuapp.com/productos"
    );
    const dato = await response.json();
    setData(dato);
  }

  useEffect(() => {
    getData()
  }, [])

    return (
      <>
          <h1>Ofertas</h1>
        {
    data.map(({ nombre, precio, imagen, id }) => {
      return (
        <div>
          <h1>{nombre}</h1>
          <img src={imagen} alt={nombre} />
          <Link key={id} to={`/producto/${id}`}>
            Agregar
          </Link>
        </div>
      );
    })}
      </>
    );
}

export default Main
