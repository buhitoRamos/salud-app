import React, { useState } from 'react';


function Food(){
    return(
        <div className="container">
            <form>
                <h2>crear usuario</h2>
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
    


}
export default Food