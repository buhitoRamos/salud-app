import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from "../components/Card"

function Personal() {
    const [rta, SetRta] = useState([{"id":0}])

    useEffect(() => {
        consultaAPI();
    },[])

    const consultaAPI = async () => {

        const consulta = await axios(
            { method: 'GET', url: 'http://localhost:8080/food/listar', data: null }
        );
        
        SetRta(consulta.data);
        
    }

    return (
        <div onClick={()=>console.log(rta)}>
            <h1 className="text-center">pagina personal</h1>
            <div className="container">
                {
                    rta.map(r=>{
                        return(
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


}
export default Personal