import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import Login from './pages/login';
import Cadastrar from './pages/cadastrar';
import Eventos from './pages/eventos';
import SemPermissao from './pages/sempermissao';
import Dashboard from './pages/admin/dashboard';
import CrudCategorias from './pages/admin/crudcategorias';
import CrudEventos from './pages/admin/crudeventos';
import Naoencontrada from './pages/naoencontrada';
import jwt_decode from 'jwt-decode';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from "react-router-dom";


const RotaPrivada = ({component : Component, ...rest}) => (
<Route 
{...rest}
render = {
  props => 
    localStorage.getItem('token-nyous') !== null ?
      (<Component {...props} />) :
      (<Redirect to={{pathname :'/login', state :{from : props.location}}} />)

}
/>
);

const RotaPrivadaAdmin = ({component : Component, ...rest}) => (
  <Route 
  {...rest}
  render = {
    props => 
      localStorage.getItem('token-nyous') !== null && jwt_decode(localStorage.getItem('token-nyous')).role === 'Admin' ?
        (<Component {...props} />) :
        (<Redirect to={{pathname :'/sempermissao', state :{from : props.location}}} />)
  
  }
  />
  );


// Usado para definir as rotas da aplicação
const routing = (
  <Router> /*comando usado para poder definir as rotas */
    <div>
      <Switch> /* comando usado para escolher as rotas*/
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/cadastrar' component={Cadastrar} />
        <RotaPrivada path='/eventos' component={Eventos} />
        <RotaPrivadaAdmin path='/admin/dashboard' component={Dashboard} />
        <RotaPrivadaAdmin path='/admin/categorias' component={CrudCategorias} />
        <RotaPrivadaAdmin path='/admin/eventos' component={CrudEventos} />
        <Route path='/sempermissao' component={SemPermissao} />

        <Route component={Naoencontrada} />
    </Switch>
  </div>
  </Router>
  )
  
  ReactDOM.render(
  routing,
  document.getElementById('root')
  );



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
