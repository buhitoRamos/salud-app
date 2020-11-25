import React from 'react'
import btnLogin from '../images/btn.png'
import { Link } from 'react-router-dom'

//Componente que redirecciona al login.
const BtnNavegation = ({ url }) => (
    <div>
        <Link to={url}>
            <div className="container">
                <img src={btnLogin}
                    alt="log"
                    className="rounded mx-auto d-block p-5"
                />
            </div>
            <div className="text-center">
                <h1>Click to Login</h1>
            </div>
        </Link>
    </div>
)
export default BtnNavegation