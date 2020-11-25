import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function Login() {
    const history = useHistory();
    const [mensaje, setMensaje] = useState("");
    const [eleccion, setEleccion] = useState("");
    const [request, setRequest] = useState({});
    const [response, setResponse] = useState({});


    //esta función completa el objeto del request para ser enviado al back
    function handleSeleccion(e) {
        setEleccion(e.target.value);

    }

    //Esta función me lleva a la pagina de food
    function goToFood() {
        history.push({
            pathname: '/food',
            response: response,
        })
    }

    const consultaAPI = async () => {
        try {
            const consulta = await axios(
                { method: 'POST', url: 'http://localhost:8080/usuario/login', data: request }
            );

            setResponse(consulta);
            goToFood();


        } catch (error) {
            console.log(error)
            setMensaje("Ingreso un usuario y/o clave invalido")
        }
    }


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
        if (!mensaje == "") {
            setMensaje("")
        }
        const { id, value } = e.target;
        setRequest({ ...request, [id]: value })
    }

    return (
        <div>
            <h1 className="text-center bg-primary text-white">Welcome to login saludable-app</h1>
            <div className="container">
                <div class="form-check">
                    <h4 className="">Seleccione una opcion</h4>
                    <input class="form-check-input" type="radio"
                        name="exampleRadios" id="exampleRadios1" value="personal"
                        onClick={handleSeleccion} />
                    <label class="form-check-label" for="exampleRadios1">
                        personal de salud
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio"
                        name="exampleRadios" id="exampleRadios2" value="paciente"
                        onClick={handleSeleccion} />
                    <label class="form-check-label" for="exampleRadios2">
                        paciente
                 </label>
                </div>
                <div className="">
                    <input type="text" id="usuario" placeholder="ingrese usuario"
                        onChange={_onChange} /><br />
                    <input type="password" id="contraseña" placeholder="ingrese password"
                        onChange={_onChange} /><br />
                    <label>{mensaje}</label><br />

                    <button className=" btn btn-primary"
                        onClick={_login}>Ingresar</button>
                </div>
            </div>
        </div>
    )

}
export default Login