import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

function NewUser(props) {



    if (props.render) {
        return (
            <div className=" text-center mr-5">
                <h4>Ingreso</h4>
                <form className="form-line">


                    <input type="text" id="nombre" placeholder="Ingrese Nombre"
                        className="form-control mx-sm-3 mb-1" aria-describedby="nombre" />


                    <input type="text" id="apellido" placeholder="Ingrese Apellido"
                        className="form-control mx-sm-3 mb-1" aria-describedby="apellido" />


                    <input type="text" id="sexo" placeholder="Ingrese sexo"
                        className="form-control mx-sm-3 mb-1" aria-describedby="sexo" />


                    <input type="text" id="fechaNacimiento" placeholder="Ingrese Fecha De Nacimiento"
                        className="form-control mx-sm-3 mb-1" aria-describedby="fechaNacimiento" />


                    <input type="text" id="localidad" placeholder="Ingrese Localidad"
                        className="form-control mx-sm-3 mb-1" aria-describedby="localidad" />
                    <label for="trastorno">Tratamiento</label>
                    <select id="trastorno" className="form-control mx-sm-3 mb-1">
                        <option selected>Seleccionar...</option>
                        <option>Bulimia</option>
                        <option>Anorexia</option>
                        <option>Obesidad</option>
                    </select>
                    <div class="row">
                        <div class="col">
                            <input type="text" className="form-control mx-sm-3 mb-1" placeholder="Usuario" />
                        </div>
                        <div class="col">
                            <input type="password" className="form-control mx-sm-3 mb-1" placeholder="Password" />
                        </div>
                    </div>
                </form>
            </div>

        )

    } else {
        return (null)

    }


}
export default NewUser