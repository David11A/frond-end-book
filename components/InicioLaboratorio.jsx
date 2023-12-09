import React from 'react'
import "./styles.css";
import { CardUniversidades } from './CardUniversidades';
import { Header } from './Header';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const InicioLaboratorio = () => {



  

  const navegar = useNavigate();

  const Reservados = () => {
    navegar('/reservados');
  }
  const Inicio = () => {
    navegar('/inicioLaboratorio');
  }

  const Bitacora = () => {
    navegar('/bitacora');
  }


  return (
    <>

      <Header />
      <div className="d-flex justify-content-center mt-5">
        <h2 className="white-text d-flex justify-content-center">Bienvenidos a laboratorios</h2>
      </div>

      <div className="container mt-5 ">
        <div className="row justify-content-center">
          <div class="card text-center" style={{ background: '#dee3e9' }}>
            <div class="card-header" >
              <ul class="nav nav-tabs card-header-tabs" >
                <li class="nav-item " >
                  <a class="nav-link active" onClick={Inicio} >Inicio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" onClick={Reservados} >Mis Reservaciones</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" onClick={Bitacora} >Bitacora</a>
                </li>
              </ul>
            </div>

            <CardUniversidades />

          </div>
        </div>
      </div>

    </>
  );
};