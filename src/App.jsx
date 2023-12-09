import React from 'react'
import { LogIn } from '../components/LogIn'
import { InicioLaboratorio } from '../components/InicioLaboratorio'
import { Reservados } from '../components/Reservados'
import { Registro } from '../components/Registro'
import { Bitacora } from '../components/Bitacora'
import { CardReserva } from '../components/CardReserva'
import { CardUniversidades } from '../components/CardUniversidades'
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom"

import { useState, useEffect } from "react"
import { Error } from '../components/Error'
import axios from 'axios';


function App() {
  const [inicioSesion, setInicioSesion] = useState(false);
  const [inicioSesionInfo, setInicioSesionInfo] = useState({});
  const validarCookie = async () => {
    const ulrValidar = 'http://localhost:3000/api/validacion'
    const result = await axios.get(ulrValidar, { withCredentials: true });
    const resultData = (await result).data;
    if (result.status === 200) {

      setInicioSesion(true);
      setInicioSesionInfo(resultData);

    }
  }
  useEffect(() => {
    validarCookie();

  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>

          {inicioSesion ? (<Route path="/" element={<InicioLaboratorio />} />) :
                          <Route path="/" element={<LogIn prop1={setInicioSesion} />} />}
          { inicioSesion ? (<Route path="/inicioLaboratorio" element ={<inicioLaboratorio/>} />) :<></> }
          { inicioSesion ? (<Route path="/reservados" element ={<Reservados/>} />) :<></> }
          <Route path='/registro' element={<Registro />}  ></Route>
          { inicioSesion ? (<Route path="/bitacora" element ={<Bitacora/>} />) :<></> }
          { inicioSesion ? (<Route path="/cardReserva" element ={<CardReserva/>} />) :<></> }
          { inicioSesion ? (<Route path="/cardUniversidades" element ={<CardUniversidades/>} />) :<></> }
     
          <Route path='*' element={<Error />}  ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App