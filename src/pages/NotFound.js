import React from 'react'
import BtnNavegation from "../components/BtnNavegation"

//Esta es la pagina NotFound que se muestra si no se esta logueado o si se va a una url inválida.
const NotFound = () => (
    <div>
        
        <div>
            <BtnNavegation
                url="/login"                
            />
        </div>
    </div>
)
export default NotFound

