import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import NewUser from "../components/NewUser"

function Login() {
    const history = useHistory();
    const [mensaje, setMensaje] = useState("");
    const [eleccion, setEleccion] = useState("");
    const [request, setRequest] = useState({});
    const [newUser, setNewUser] = useState(false);


    //esta función completa el objeto del request para ser enviado al back
    function handleSeleccion(e) {
        setEleccion(e.target.value);
    }

    //Esta función crea un token y lleva a la pagina de food
    function goToFood(data) {        
        let token = JSON.stringify("31576533");
        localStorage.setItem('tokenOk', token);
        history.push({
            pathname: '/food',
            data: data,
        })
    }

    //verifica si el usuario y clave pertenece a un usuario logueado.
    const consultaAPI = async () => {
        try {
            const consulta = await axios(
                { method: 'POST', url: 'http://localhost:8080/usuario/login', data: request }
            );           
                                
            goToFood(consulta.data);
        } catch (error) {
            console.log(error)
            setMensaje("Ingreso un usuario y/o clave invalido")
        }
    }

    //Verifica tipo de logueo
    function _login(e) {
        e.preventDefault();
        if (eleccion === "paciente") {
            consultaAPI();
        }
        if (eleccion === "") {
            setMensaje("Debe seleccionar una opcion")
        }
    }

    //captura el evento de lo que se escribe en los input y crea el request
    function _onChange(e) {
        if (!mensaje === "") {
            setMensaje("")
        }
        const { id, value } = e.target;
        setRequest({ ...request, [id]: value })
    }

    return (
        <div >
            <div className="float-right">
                <br></br>
                <br></br>
                <NewUser
                    render={newUser} />
            </div>
            <h1 className="text-center bg-primary text-white">Welcome to login saludable-app</h1>
            <div className="container w-50 ml-5 float-left  " >
                <h4 className="text-left">Seleccione una opcion</h4>
                <div className="form-check ">
                    <input className="form-check-input" type="radio"
                        name="exampleRadios" id="exampleRadios1" value="personal"
                        onClick={handleSeleccion} />
                    <label className="form-check-label" for="exampleRadios1">
                        personal de salud
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio"
                        name="exampleRadios" id="exampleRadios2" value="paciente"
                        onClick={handleSeleccion} />
                    <label className="form-check-label" for="exampleRadios2">
                        paciente
                 </label>
                </div>
                <div className="">
                    <input type="text" id="usuario" placeholder="ingrese usuario"
                        onChange={_onChange} /><br />
                    <input type="password" id="contraseña" placeholder="ingrese password"
                        onChange={_onChange} />
                    <div>
                        <label>{mensaje}</label>
                    </div>
                    <button className=" btn btn-primary ml-5"
                        onClick={_login}>Ingresar</button> <br />
                    <a className="text-center"
                        onClick={() => setNewUser(!newUser)}>Crear nuevo usuario</a>
                </div>
            </div>
        </div>
    )

}
export default Login