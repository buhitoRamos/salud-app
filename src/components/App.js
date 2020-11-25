import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "../pages/Login"
import Food from "../pages/Food"
import NotFound from '../pages/NotFound'

/*
para que funcione el redireccionamiento instalo react router dom y react router
Estas dependencias ayudan a renderizar las diferentes paginas sin refrescar
*/

const App = () => (
  <div>
     
     <BrowserRouter>
          <Switch>
              <Route path='/login' component={Login} />
              <Route path='/food' component={Food} />             
              <Route component={NotFound} />
          </Switch>
      </BrowserRouter> 
  </div>
)
export default App
