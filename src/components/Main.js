import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { MainStyles, ProductStyle } from "../styles/Main.styles";

function Main({oferta, popular}) {
  const [dataO, setDataO] = useState([]);
  const [dataP, setDataP] = useState([]);
  
  const getData = async () => {
    const responseO = await fetch("https://latienda2021.herokuapp.com/ofertas");
    const responseP = await fetch("https://latienda2021.herokuapp.com/populares");
    const datoO = await responseO.json();
    const datoP = await responseP.json();
    setDataO(datoO);
    setDataP(datoP);
    oferta(datoO);
    popular(datoP);
  }

  useEffect(() => {
    getData()
  }, [])


  

    return (
      <>
        <h1 className="producto-seccion">Ofertas</h1>
        <ProductStyle>
          {dataO.map(({ nombre, precio, imagen, id }) => {
            return (
              <div className="card" key={nombre + id}>
                <img src={imagen} alt={nombre} />
                <p>{precio}</p>
                <p>{nombre}</p>
                {/* <Link  className="boton-agregar" to="/"  >Agregar</Link>  */}


                <Link className="boton-agregar" to={`/producto/${nombre}`}>Detalle</Link>
              </div>
            );
          })}
        </ProductStyle>
        <h1 className="producto-seccion">Populares</h1>
        <ProductStyle>
          {dataP.map(({ nombre, precio, imagen, id }) => {
            return (
              <div className="card" key={nombre + id}>
                <img src={imagen} alt={nombre} />
                <p>{precio}</p>
                <p>{nombre}</p>
                {/* <Link  className="boton-agregar" to="/"  >Agregar</Link>    */}
                <Link className="boton-agregar" to={`/producto/${nombre}`}>Detalle</Link>
              </div>
            );
          })}
        </ProductStyle>
      </>
    );
}

export default Main
