import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ContainerCard, ContainerImg, ContainerNombre, ContainerPrecio, ButtonAdd, ContainerProducts } from '../styles/Detalle.styles';
import { ProductStyle } from '../styles/Main.styles';

function Detalle({producto, productos, endpoint }) {

    const {nombre, imagen, precio } = producto
    const {id} = useParams()
    const datos = productos.filter(el => el.nombre !== id)
    

    const [total, setTotal] = useState(0);
    
    const handleData = (data) => {
    
      localStorage.setItem(data.nombre, JSON.stringify(data) )
      const  producto = localStorage.getItem(data.nombre)

      const {precio} = JSON.parse(producto)
      setTotal(total + precio)
      getStorage()
    
    }

    const borrar = async () => {

      await fetch(`${endpoint}/${producto.id}`,{

        method: "DELETE"

      })

    }  
  
  const getStorage = () => {

    localStorage.setItem("total", total.toFixed(2))
  }  

    return (
        <div>
            <ContainerCard>
                <ContainerImg><img src={imagen} alt="" /></ContainerImg>
                <ContainerNombre>{nombre}</ContainerNombre>
                <ContainerPrecio>{precio}</ContainerPrecio>
                <ButtonAdd onClick={() => handleData(producto)} >Agregar</ButtonAdd>
                <ButtonAdd className="delete" onClick={() => borrar()} >Eliminar</ButtonAdd>
            </ContainerCard>


            <h1>Populares</h1>
            
            
            <ProductStyle>
            {datos.map(({ nombre, precio, imagen, id }) => {
                    return (

                                <div  className="card" key= {nombre + id}>
                                            
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
