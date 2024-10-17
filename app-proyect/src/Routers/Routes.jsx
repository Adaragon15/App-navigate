import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Personas from "../screens/Personas";
import Generador from "../screens/Qr";
import Blanco from "../screens/Blanco";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Personas />} />
                <Route path='/Generar' element={<Generador />} />
                <Route path='/B' element={<Blanco />} />

            </Routes>
        </BrowserRouter>
    );
}

export default Routers;
