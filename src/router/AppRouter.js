import React from 'react'
import NavBar from '../components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/registro" />
                </Routes>
            </BrowserRouter>
        </>
    )
}
