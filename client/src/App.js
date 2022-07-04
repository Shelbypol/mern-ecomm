import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/auth/Login' 
import Register from './pages/auth/Register' 
import Home from './pages/Home' 

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register}/>
      </Switch>
    </BrowserRouter>
  )
}
  


export default App;
