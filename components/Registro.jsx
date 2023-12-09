import React, { useState } from 'react';
import JaguarLogin1 from '/img/LOGO.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const url = "http://localhost:3000/api/registrarUsuarios"

export const Registro = () => {
    const [dataFormulario, setDataFormulario] = useState({
        Nombre: "",
        Correo: "",
        Contrasena: "",
        Telefono: "",
        tipoUsuario: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setDataFormulario({ ...dataFormulario, [name]: value });
    }

    const handleSubmit = async () => {
        event.preventDefault();
        const result = await axios.post(url, dataFormulario);
        const dataResult = result.data; 
        console.log(dataResult);
    }

    const navegar = useNavigate();
    const CancelarReserva = () => {
        navegar('/');
    }
    return (
        <>
            <div className="registro-background ">
                <div className="d-flex justify-content-center mt-3">
                    <div className="card  custom-input-width">
                        <img className="JaguarLogin2 " src={JaguarLogin1} alt="Logo" />
                        <div className="card-body ">
                            <form>
                                <h5 className=" text-center ">Ingresa tus datos</h5>
                                <div className="form-floating mt-4 mb-3">
                                    <input type="text" className="form-control" id="nombre" name="Nombre" value={dataFormulario.Nombre} onChange={handleChange} />
                                    <label htmlFor="nombre">Nombre</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="correo" name="Correo" value={dataFormulario.Correo} onChange={handleChange} />
                                    <label htmlFor="correo">Correo</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="contrasena" name="Contrasena" value={dataFormulario.Contrasena} onChange={handleChange} />
                                    <label htmlFor="contrasena">Contraseña</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="tel" className="form-control" id="telefono" name="Telefono" value={dataFormulario.Telefono} onChange={handleChange} />
                                    <label htmlFor="telefono">Teléfono</label>
                                </div>

                                <div className="d-flex flex-row">
                                    <div className="form-check me-3">
                                        <input type="radio" className="form-check-input" id="alumno" name="tipoUsuario" value="Alumno" onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="alumno"> Alumno</label>
                                    </div>

                                    <div className="form-check">
                                        <input type="radio" className="form-check-input" id="maestro" name="tipoUsuario" value="Maestro" onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="maestro"> Maestro </label>
                                    </div>
                                </div>
                                
                                <div className="d-flex flex-column align-items-center mt-4">
                                    <button className="btn btn-primary mb-3 w-100" onClick={ handleSubmit}>
                                        Confirmar
                                    </button>

                                    <button className="btn btn-secondary w-100" onClick={CancelarReserva}>
                                        Volver
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}