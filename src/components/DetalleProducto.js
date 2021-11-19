import React, { useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Detalle from './Detalle';

function DetalleProducto({oferta, popular}) {
    const {id} = useParams()
    const fOferta = oferta.find(el => el.nombre === id)
    const fPopular = popular.find(el => el.nombre === id)
    

  
    return (
      <>
      {fOferta === undefined ? <Detalle producto = {fPopular} productos={popular}/> : <Detalle producto={fOferta} productos={oferta}/> }
      </>
    );
}

export default DetalleProducto
