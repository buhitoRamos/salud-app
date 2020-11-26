import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

function NewUser(props) {
    const [request, setRequest] = useState({});
    const [saveContact, setSabeContact]=useState("hidden")
    const [response, setResponse]=useState({})

    useEffect(()=>{
        if(response.status==200){
            setSabeContact(false)

        }
        
    })
 

   

  function _onChange(e){
        const { id, value } = e.target;
        setRequest({ ...request, [id]: value })
        console.log(request)
    }

    function _handleClick(e){
        e.preventDefault();
        consultaAPI();
    }
    const consultaAPI = async () => {
        try {
            const consulta = await axios(
                { method: 'POST', url: 'http://localhost:8080/usuario/guardar', data: request }
            );
            setResponse(consulta)
            console.log("El status es: "+consulta.status)
            
            
        } catch (error) {
            console.log(error)
            
        }
    }



    if (props.render) {
        return (
            <div className=" text-center mr-5">
                <h4>Ingreso</h4>
                <form className="form-line">
                    <input type="text" id="nombre" placeholder="Ingrese Nombre"
                        className="form-control mx-sm-3 mb-1" aria-describedby="nombre"
                        onChange={_onChange} />
                    <input type="text" id="apellido" placeholder="Ingrese Apellido"
                        className="form-control mx-sm-3 mb-1" aria-describedby="apellido" 
                        onChange={_onChange}/>
                        <input type="text" id="documento" placeholder="Ingrese Documento"
                        className="form-control mx-sm-3 mb-1" aria-describedby="documento"
                        onChange={_onChange} />
                    <input type="text" id="sexo" placeholder="Ingrese sexo"
                        className="form-control mx-sm-3 mb-1" aria-describedby="sexo"
                        onChange={_onChange} />
                    <input type="text" id="fecha_nacimiento"
                        placeholder="Ingrese Fecha De Nacimiento"
                        className="form-control mx-sm-3 mb-1"
                        aria-describedby="fechaNacimiento"
                        onChange={_onChange}/>
                    <input type="text" id="localidad" placeholder="Ingrese Localidad"
                        className="form-control mx-sm-3 mb-1" aria-describedby="localidad" 
                        onChange={_onChange}/>
                    <label for="trastorno">Tratamiento</label>
                    <select id="tratamiento" className="form-control mx-sm-3 mb-1" onClick={_onChange}>
                        <option selected>Seleccionar...</option>
                        <option>Bulimia</option>
                        <option>Anorexia</option>
                        <option>Obesidad</option>
                        
                    </select>
                    <div class="row">
                        <div class="col">
                            <input type="text" id="usuario" className="form-control mx-sm-3 mb-1"
                                placeholder="Usuario" 
                                onChange={_onChange}/>
                        </div>
                        <div class="col">
                            <input type="password" id="contraseña" className="form-control mx-sm-3 mb-1"
                                placeholder="Password" 
                                onChange={_onChange}/>
                        </div>
                    </div>
                    <button className=" btn btn-primary btn-lg"
                    onClick={_handleClick}>Registrar</button>
                    <h4 hidden={saveContact}>Guardado</h4>
                </form>
            </div>

        )

    } else {
        return (null)

    }


}
export default NewUser