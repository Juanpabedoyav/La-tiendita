import React, { useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

function DetalleProducto({oferta, popular}) {
    const {id} = useParams()
    const [warning, setWarning] = useState([])
    const fOferta = oferta.find(el => el.nombre === id)
    const fPopular = popular.find(el => el.nombre === id)

    useEffect(() => {
        if (fOferta.nombre !== undefined) {
            setWarning(fOferta.nombre);
        } else {
            alert('no')
        }
        // if (fPopular.nombre !== undefined) {
        //     setWarning(fPopular.nombre);
        // }
        console.log(fOferta.nombre);
        console.log(warning)
    }, [])
    useEffect(() => {
        console.log(warning)
    }, [warning])
    return (
      <>
        {/* <h1>{warning} :3</h1> */}
        {/* <div>{fPopular.nombre && <h1>{fPopular.nombre}</h1>}</div> */}
        {/* <div>{fPopular.nombre && <h1>{fPopular.nombre}</h1>}</div> */}
      </>
    );
}

export default DetalleProducto
