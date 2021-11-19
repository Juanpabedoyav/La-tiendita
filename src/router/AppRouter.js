import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../containers/App'
import DetalleProducto from "../components/DetalleProducto";

export const AppRouter = () => {
    const [oferta, setOferta] = useState([])
    const [popular, setPopular] = useState([])
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<App oferta={setOferta} popular={setPopular} />}
            />
            <Route path="/registro" />
            <Route
              exact
              path="/producto/:id"
              element={<DetalleProducto oferta={oferta} popular={popular} />}
            />
          </Routes>
        </BrowserRouter>
      </>
    );
}
