import React from 'react';
import {useParams} from 'react-router-dom';
import Detalle from './Detalle';

function DetalleProducto({oferta, popular}) {
    const {id} = useParams()
    const fOferta = oferta.find(el => el.nombre === id)
    const fPopular = popular.find(el => el.nombre === id)
  
    return (
      <>
      {fOferta === undefined 
        ? <Detalle producto = {fPopular} productos={popular} 
                  endpoint={"https://latienda2021.herokuapp.com/populares"} /> 
        : <Detalle producto={fOferta} productos={oferta} 
                endpoint={"https://latienda2021.herokuapp.com/ofertas"}/> }
      </>
    );
}

export default DetalleProducto
