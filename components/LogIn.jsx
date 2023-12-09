import React from 'react';
import "./styles.css";
import videologin from '/img/videologin3.mp4';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export const LogIn = ( {prop1} ) => {

    const url = "http://localhost:3000/api/validacion"

    const navegar = useNavigate();
    

    const Registro = () => {

        navegar('/registro');
    }


    const [formData, setFormData] = useState({

        Correo: "",
        Contrasena: ""
    
      });
    
    
      const onHandleChange = (event) => {
    
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    
      };
    
      const onHandleSubmit = async (event) => {
        event.preventDefault();
    
        const result = await axios.post(url, formData,  { withCredentials : true }  );
        const resultData = (await result).data;
    
        if (result.status === 200){
    
          prop1(true);
          navigate('/inicioLaboratorio')
    
    
        }
      
        if (result.status === 404){
    
          console.log("Inicio de Sesion No Exitoso");
        }
      
    
      }
      
    

    return (
        <>
            <div className="full-login-background custom-background ">
                <div className="d-flex justify-content-center mt-5 ">
                    <div className="contenedor-tarjeta card mt-5" style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                        <div className="card-body " style={{ padding: 0 }}>
                            <div className="row">
                                <div className="col d-none d-md-block " style={{ flex: '0 0 30%' }}>
                                    <div className="video-container d-none d-md-block" >
                                        <video autoPlay loop muted style={{ width: '111%', height: '99%' }}>
                                            <source src={videologin} type="video/mp4" />
                                        </video>
                                    </div>
                                </div>

                                <div className="col d-flex align-items-center justify-content-center">
                                    <div className="card custom-input-width2" >
                                        <div className="card-body">
                                            <h5 className="text-center mt-3">Inicio de sesión</h5>
                                            <form className="text-center mt-5"  onSubmit={onHandleSubmit}>
                                                <div className="form-floating mb-3">
                                                    <input type="email" className="form-control w-100" id="correo" name = "Correo" onChange={onHandleChange} />
                                                    <label>Correo </label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="password"  className="form-control custom-input-style " id="contrasena" name = "Contrasena" onChange={onHandleChange} />
                                                    <label>Contraseña</label>
                                                </div>

                                                <div className="d-flex flex-column align-items-center mt-4">
                                                    <button className="btn btn-primary mb-3 w-100"style={{ backgroundColor: '#25476a', color: '#fff' }}>
                                                        Iniciar sesión
                                                    </button>
                                                    <button className="btn btn-secondary w-100" onClick={Registro}>Registrarse</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
