import React from 'react'
import NavBar from '../components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../containers/App'

export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path = "/" element={<App/>}/>
                    <Route path = "/registro" />
                    <Route path = "/producto:id" />
                </Routes>
            </BrowserRouter>
        </>
    )
}
