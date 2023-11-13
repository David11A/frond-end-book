import React from 'react'
import { Header } from './Header';
import { CardReserva } from './CardReserva';
import { useNavigate } from 'react-router-dom'

export const Bitacora = () => {
    const navegar = useNavigate();

    const Reservados = () => {
        navegar('/reservados');
    }
    const aInicio = () => {
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

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div class="card text-center" style={{ background: '#dee3e9' }}>
                        <div class="card-header" >
                            <ul class="nav nav-tabs card-header-tabs" >
                            <li class="nav-item" >
                                    <a class="nav-link active" onClick={aInicio}>Inicio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" onClick={Reservados} >Reservados</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" onClick={Bitacora} >Bitacora</a>
                                </li>
                            </ul>

                        </div>

                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Laboratorios Centroamérica - Tegucigalpa</button>
                        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <CardReserva />
                                </div>
                            </div>
                        </div>
                        
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Laboratorios El Prado - Tegucigalpa</button>
                        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <CardReserva />
                                </div>
                            </div>
                        </div>

                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Laboratorios Norte - San Pedro Sula</button>
                        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <CardReserva />
                                </div>
                            </div>
                        </div>

                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Laboratorios Central - San Pedro Sula</button>
                        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <CardReserva />
                                </div>
                            </div>
                        </div>

                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Laboratorios La Ceiba</button>
                        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                    <CardReserva />
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </div>


        </>
    );
};


