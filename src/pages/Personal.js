import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Card from "../components/Card"
import BtnNavegation from "../components/BtnNavegation"

function Personal() {
    const [rta, SetRta] = useState([{ "id": 0 }])
    const [logued, setLogued] = useState(false)
    const history=useHistory();
    

    useEffect(() => {
        consultaAPI();

        let token = ""
        let tk = localStorage.getItem('tokenOk')
        token = JSON.stringify(tk)
        var validaToken = token.includes("31576533")
        setLogued(validaToken)
    }, [])

   function _salir(e){
        const exit = "exit"
        let token = JSON.stringify(exit)
        localStorage.setItem('tokenOk', token);
        history.push('/login')
        e.preventDefault();
    }

    const consultaAPI = async () => {

        const consulta = await axios(
            { method: 'GET', url: 'http://localhost:8080/food/listar', data: null }
        );

        SetRta(consulta.data);

    }
    if (logued) {
        return (
            <div >
                <div className="bg-dark text-white p-2">
                <button className="btn btn-danger float-right"
                onClick={_salir}
                    >Salir</button>
                    <h1 className="text-center">Informes</h1>
                    
                </div>
                <div className="container">
                    {
                        rta.map(r => {
                            return (
                                <Card
                                    key={r.id.toString()}
                                    id={r.id}
                                    nombre={r.nombre}
                                    apellido={r.apellido}
                                    tipo={r.tipo_comida}
                                    principal={r.comida_principal}
                                    secundaria={r.comida_secundaria}
                                    bebida={r.bebida}
                                    postre={r.postre}
                                    hambre={r.hambre}
                                    fecha={r.fecha_hora}

                                />
                            )
                        })
                    }

                </div>
            </div>
        )
    } else {

        return (
            <BtnNavegation
            url="/login"/>
        )

    }






}
export default Personal