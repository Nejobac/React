import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {HomePage,AutoPage,PokePage} from "./pages";

const App=()=>{
    return(
        /*Desde el navegador  */
        <BrowserRouter>
        {/* vamos a tener distintas rutas */}
            <Routes>
                {/* Especificamos cada ruta */}
                <Route path="/" element={<HomePage/>}/>
                <Route path="/auto" element={<AutoPage/>}/>                
                <Route path="/pokemon" element={<PokePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;


//Si voy a importar mas de un componente tengo que quitar el default y poner los componentes en {}
