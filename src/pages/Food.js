import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import BtnNavegation from "../components/BtnNavegation"


function Food(props) {
    const [logued, setLogued] = useState(false)
    const [datos] = useState(props.location.data)
    const [postreChk, setPostreChk] = useState("hidden")
    const [HiddenPostre, setHiddenPostre] = useState("hidden")
    const [request, setRequest] = useState({})
    const [saved, setSaved] = useState("")
    const history = useHistory();


    useEffect(() => {
        let token = ""
        let tk = localStorage.getItem('tokenOk')
        token = JSON.stringify(tk)
        var validaToken = token.includes("31576533")
        setLogued(validaToken)
    })

    useEffect(() => {

        try {
            let f = new Date();
            let fecha = f.getDate() + "-" + (f.getMonth() + 1) + "-" + f.getFullYear() + " / " + f.getHours() + ":" + f.getMinutes();
            setRequest({ ...request, "fecha_hora": fecha, "user_id": datos.id })

        } catch (error) {
            setLogued(false)

        }
    }, [])

    function _selectedFood(e) {

        if (e.target.value === "Almuerzo" || e.target.value === "Cena") {
            setPostreChk(false)
        } else {
            setPostreChk("hidden")
        }
    }

    function _save(e) {
        e.preventDefault();
        try {
            consultaAPI();
            setSaved("Guardado")
        } catch (error) {
            console.log(error)
        }
    }


    function _salir(e) {
        const exit = "exit"
        let token = JSON.stringify(exit)
        localStorage.setItem('tokenOk', token);
        history.push('/login')
        e.preventDefault();
    }

    const consultaAPI = async () => {

        const consulta = await axios(
            { method: 'POST', url: 'http://localhost:8080/food/guardar', data: request }
        );
    }

    function _onChangePostre(e) {
        let select = e.target.value
        const ingirio = "ingirio_postre";
        if (select === "true") {
            setHiddenPostre(false)
            setRequest({ ...request, [ingirio]: true })
        }
        if (select === "false") {
            setHiddenPostre("hidden")
            setRequest({ ...request, [ingirio]: false })
            setRequest({ ...request, 'postre': '' })
        }
    }

    function _updateRequest(e) {
        let { id, value } = e.target;
        if (value === "true") {
            value = true
        } if (value === "false") {
            value = false
        }
        setRequest({ ...request, [id]: value })
    }


    if (logued) {
        return (
            <div>
                <div className="p-3 mb-2 bg-primary text-white">
                    <button className="btn btn-danger float-right m-2"
                        onClick={_salir}
                    >Salir</button>
                    <h2 className="float-right">Welcome {datos.nombre}</h2>
                    <h2 className="text-left">Cargar Comidas</h2>
                </div>
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label for="tipo_comida">Tipo de comida diaria</label>
                            <select id="tipo_comida" className="form-control"
                                onClick={_selectedFood}
                                onChange={_updateRequest}>
                                <option >Choose...</option>
                                <option>Desayuno</option>
                                <option>Almuerzo</option>
                                <option>Merienda</option>
                                <option>Cena</option>
                            </select>
                            <label for="comida_principal" >Comida principal</label>
                            <input id="comida_principal" onChange={_updateRequest} className="form-control" type="text" />
                            <label for="comida_secundaria">Comida secundaria</label>
                            <input id="comida_secundaria" className="form-control" type="text" onChange={_updateRequest} />
                            <label for="bebida">Bebida</label>
                            <input id="bebida" className="form-control" type="text" onChange={_updateRequest} />
                            <div hidden={postreChk} onChange={_onChangePostre}>
                                <label for="postre">¿Ingirió Postre?</label> <br />
                                <div className="form-check" >
                                    <input className="form-check-input" type="radio" name="postre" id="SiPostre" value="true" />
                                    <label className="form-check-label" for="noPostre">si</label><br />
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="postre" id="NoPostre" value="false" />
                                    <label className="form-check-label" for="noPostre">no</label>
                                </div>
                                <div hidden={HiddenPostre}>
                                    <label for="postre">Postre</label>
                                    <input id="postre" className="form-control" type="text" onChange={_updateRequest} />
                                </div>
                            </div>
                            <div >
                                <label for="hambre">¿Se quedo con hambre?</label> <br />
                                <div className="form-check" >
                                    <input className="form-check-input" type="radio" name="hambre" id="hambre"
                                        onChange={_updateRequest} value={true} />
                                    <label className="form-check-label" for="noHambre">si</label><br />
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="hambre" id="hambre"
                                        value={false} onClick={_updateRequest} />
                                    <label className="form-check-label" for="noHambre">no</label>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className=" btn btn-primary btn-lg"
                                onClick={_save}>Enviar</button>
                            <h3>{saved}</h3>
                        </div>
                    </form>
                </div>
            </div>
        )

    } else {
        return (
            <BtnNavegation
                url="/login" />
        )
    }
}
export default Food

