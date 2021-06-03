import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './views/Login'
import NotFound from './views/NotFound'
import Home from './views/Home'
import Usuarios from './views/Usuarios'
import AddUsuarios from './views/AddUsuarios'
import AccidenteLaboral from './views/AccidentesLaborales'
import AddAccidente from './views/AddAccidente'
import EnfermedadLaboral from './views/EnfermedadesLaborales'
import AddEnfermedad from './views/AddEnfermedades'
import DetallerAccidentes from './views/DetallerAccidentes'
import DetailEnfermedades from './views/DetailEnfermedades'





function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/inicio" component={Home}/>
        <Route exact path="/accidenteLaboral" component={AccidenteLaboral}/>
        <Route exact path="/addAccidente" component={AddAccidente}/>
        <Route exact path="/usuarios" component={Usuarios}/>
        <Route exact path="/addUsuarios" component={AddUsuarios}/>
        <Route exact path="/enfermedadLaboral" component={EnfermedadLaboral}/>
        <Route exact path="/addEnfermedad" component={AddEnfermedad}/>
        <Route exact path="/detallerAccidentes/:id" component={DetallerAccidentes}/>
        <Route exact path="/detallerEnfermedades/:id" component={DetailEnfermedades}/>




        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
