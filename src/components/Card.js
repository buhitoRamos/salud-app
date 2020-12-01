import React, { useEffect, useState } from "react";
import "../components/style/card.css"

function Card(props) {
    const [Hambre, SetHambre] = useState("")

    useEffect(() => {
        if (props.hambre) {
            SetHambre("si")
        } if (!props.hambre) {
            SetHambre("no")
        }

    })



    return (
        <div className="card Card" >
            <div className="card-body bg-primary text-white">
                <h4>Nombre: {props.nombre} </h4>
                <h4>Apellido: {props.apellido}</h4>
                <p>N° Paciente: {props.id}</p>
                <p>Tipo de comida: {props.tipo}</p>
                <p>Principal: {props.principal}</p>
                <p>Comida secundaria:{props.secundaria}</p>
                <p>Bebida: {props.bebida}</p>
                <p>Postre: {props.postre}</p>
                <p>Se quedo con hambre? {Hambre}</p>
                <p>fecha / hora: {props.fecha}</p>
            </div>
        </div>

    )
}
export default Card