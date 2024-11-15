import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Personas from "../screens/Personas";
import Generador from "../screens/Qr";
import Blanco from "../screens/Blanco";
import Informes from "../screens/Informes";
import Mobiliario from "../screens/Mobiliario";
import Ubicaciones from "../screens/Ubicaciones";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Blanco />} />
                <Route path='/Personas' element={<Personas />} />
                <Route path='/Generar' element={<Generador />} />
                <Route path='/Informes' element={<Informes />} />
                <Route path='/Mobiliario' element={<Mobiliario />} />
                <Route path='/Ubicaciones' element={<Ubicaciones />} />
                {/* <Route path="menu" element={<Menu/>}/> */}
                {/* <Route index element={<Index/>}/> */}
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;
