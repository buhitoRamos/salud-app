import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "../pages/Login"
import Food from "../pages/Food"
import NotFound from '../pages/NotFound'
import Personal from '../pages/Personal'

/*
para que funcione el redireccionamiento instalo react router dom y react router
Estas dependencias ayudan a renderizar las diferentes paginas sin refrescar
*/

const App = () => (
     <BrowserRouter>
          <Switch>
              <Route path='/login' component={Login} />
              <Route path='/food' component={Food} /> 
              <Route path='/personal' component={Personal} />            
              <Route component={NotFound} />
          </Switch>
      </BrowserRouter> 
)
export default App
