import React, { useEffect, useState } from 'react';


function Food(){
    const [logued, setLogued]= useState(false)


useEffect(()=>{
    let token = ""
        let tk = localStorage.getItem('tokenOk')
        token = JSON.stringify(tk)
        var validaToken = token.includes("31576533")
       setLogued(validaToken)
        

        

})

if(logued){
    return(
        <div className="container">
            <form>
                <h2 className="text-center">Cargar Comidas</h2>
                <div className="form-group">
                    <label for="comidaDiaria">Tipo de comida diaria</label>
                    <select id="inputComidaDiaria" className="form-control">
                        <option selected>Choose...</option>
                        <option>Desayuno</option>
                        <option>Amuerzo</option>
                        <option>Merienda</option>
                        <option>Cena</option>
                    </select>
                    <label for="principal">comida principal</label>
                    <input id="principal" className="form-control" type="text"/>
                </div>
            </form>
            </div>


    )

} else{
    return(
<h1>not found</h1>
    )
    
}


    




    
    


}
export default Food