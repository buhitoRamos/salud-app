import React, { useEffect, useState } from 'react';


function Food(props) {
    const [logued, setLogued] = useState(false)
    const [response] = useState(props.location.data)
    const [postreChk, setPostreChk]=useState("hidden")
    const [postre, setPostre]=useState("hidden")


    useEffect(() => {
        let token = ""
        let tk = localStorage.getItem('tokenOk')
        token = JSON.stringify(tk)
        var validaToken = token.includes("31576533")
        setLogued(validaToken)
        
    })
    function _selectedFood(e){
      const select= e.target.value;
      if(select=="Almuerzo" || select=="Cena"){
          setPostreChk(false)
      } else{
          setPostreChk("hidden")
      }
    }
    function _onChangePostre(e){
        let select=e.target.value
        if(select=="true"){
            setPostre(false)
        }else{setPostre("hidden")}
    }

    if (logued) {
        return (
            <div>
                <div className="p-3 mb-2 bg-primary text-white">
                    <h2 className="float-right">Wellcome {response.nombre}</h2>
                    <h2 className="text-center">Cargar Comidas</h2>
                </div>
                <div className="container">
                    <form>

                        <div className="form-group">
                            <label for="comidaDiaria">Tipo de comida diaria</label>
                            <select id="inputComidaDiaria" className="form-control"
                            onClick={_selectedFood}>
                                <option selected>Choose...</option>
                                <option>Desayuno</option>
                                <option>Almuerzo</option>
                                <option>Merienda</option>
                                <option>Cena</option>
                            </select>
                            <label for="principal">Comida principal</label>
                            <input id="principal" className="form-control" type="text" />
                            <label for="secundaria">Comida secundaria</label>
                            <input id="secundaria" className="form-control" type="text" />
                            <label for="bebida">Bebida</label>
                            <input id="bebida" className="form-control" type="text" />
                            <div hidden={postreChk} onChange={_onChangePostre}>
                            <label for="postre">¿Ingirió Postre?</label> <br />
                            <div className="form-check" >                                
                                <input class="form-check-input" type="radio" name="postre" id="SiPostre" value="true" />
                                <label class="form-check-label" for="noPostre">si</label><br />
                                </div>
                                <div className="form-check">
                                <input class="form-check-input" type="radio" name="postre" id="NoPostre" value="false" />
                                <label class="form-check-label" for="noPostre">no</label>
                                </div>
                            <div hidden={postre}>
                            <label for="postre">Postre</label>
                            <input id="postre" className="form-control" type="text" />
                            </div>
                            </div>

                            <label for="postre">¿Se quedo con hambre?</label> <br />
                            <div className="form-check" >                                
                                <input class="form-check-input" type="radio" name="hambre" id="siHambre" value="true" />
                                <label class="form-check-label" for="noPostre">si</label><br />
                                </div>
                                <div className="form-check">
                                <input class="form-check-input" type="radio" name="hambre" id="noHambre" value="false" />
                                <label class="form-check-label" for="noPostre">no</label>
                                </div>



                            
                        </div>
                    </form>
                </div>
            </div>


        )

    } else {
        return (
            <h1>not found</h1>
        )

    }











}
export default Food