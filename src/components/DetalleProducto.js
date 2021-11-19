import React, { useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

function DetalleProducto({oferta, popular}) {
    const {id} = useParams()
    const fOferta = oferta.find(el => el.nombre === id)
    const fPopular = popular.find(el => el.nombre === id)
    
    return (
      <>
        <div>{fPopular === undefined ? <h1>{fOferta.nombre}</h1> : <h1>{fPopular.nombre}</h1>}</div>
      </>
    );
}

export default DetalleProducto
