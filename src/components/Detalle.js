import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ContainerCard, ContainerImg, ContainerNombre, ContainerPrecio, ButtonAdd, ContainerProducts } from '../styles/Detalle.styles';
import { ProductStyle } from '../styles/Main.styles';
function Detalle({producto, productos }) {

    const {nombre, imagen, precio } = producto
    const {id} = useParams()
    const datos = productos.filter(el => el.nombre !== id)
    
    // console.log(datos);

   

const handleData = (data) => {
    localStorage.setItem(data.nombre, JSON.stringify(data) )

  }
  // onClick={() => handleData(dataP)}
  // onClick={() => handleData(dataO)}



    return (
        <div>
            <ContainerCard>
                <ContainerImg><img src={imagen} alt="" /></ContainerImg>
                <ContainerNombre>{nombre}</ContainerNombre>
                <ContainerPrecio>{precio}</ContainerPrecio>
                <ButtonAdd onClick={() => handleData(producto)} >Agregar</ButtonAdd>
            </ContainerCard>


            <h1>Populares</h1>
            
            
            <ProductStyle>
            {datos.map(({ nombre, precio, imagen, id }) => {
                    return (

                                <div  className="card" key= {id}>
                                            
                                            <div><img src={imagen} alt="" /></div>
                                            <div>{nombre}</div>
                                            <div>{precio}</div>
                                            <Link className="boton-agregar" to={`/producto/${nombre}` }>Detalle</Link>
                                </div>
                   )})}
             
                <div></div>
            </ProductStyle>

            
        </div>
    )
}

export default Detalle
