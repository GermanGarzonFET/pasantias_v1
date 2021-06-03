import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Header from '../components/Header'
import axios from 'axios'
import {API_BASE_URL} from '../services/apiUrl'
import Alert from 'react-bootstrap/Alert'


const Usuario = (props) => {

  const [state , setState] = useState({
    nombres:'',
    apellidos:'',
    email:'',
    pass:'',
    roles:'',
    message:''

   })

   const [show, setShow] = useState(false);




   
  const handleChange = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  const sendData=(data)=>{
    const payload={
    "nombres":data.nombres,
    "apellidos":data.apellidos,
    "email":data.email,
    "pass":data.pass,
    "roles":[`${data.roles}`]
    }
    axios.post(API_BASE_URL+'register',payload)
    .then(function (response) {
      console.log(response)
      if(response.status === 200){
        console.log('ok, agregado')
        props.history.push('/usuarios');
      }
      else if(response.status === 400){
          console.log('error de correo ')
      }
      else{
        console.log('Error')
      }
  })
  .catch(function (error) {
    console.log(error)
    setShow({
      show:true
    })

  });
  }



  return (
    <div>
      <Header/>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <Form>
          <br />
          <Form.Group  >
            <Form.Label >Nombres *</Form.Label>
            <Form.Control type="text" required isInvalid placeholder="Ingrese el nombre completo" 
            id="nombres" name="nombres" value={state.nombres} onChange={handleChange}/>
          </Form.Group>
          <Form.Group >
            <Form.Label>Apellidos*</Form.Label>
            <Form.Control type="text" required isInvalid placeholder="Ingrese los apellidos" 
            id="apellidos" name="apellidos" value={state.apellidos} onChange={handleChange}/>
          </Form.Group>
          <Form.Group >
            <Form.Label>Correo electronico*</Form.Label>
            <Form.Control type="text" required isInvalid placeholder="Ingrese el correo" 
            id="email" name="email" value={state.email} onChange={handleChange}/>
          </Form.Group>
          <Form.Group >
            <Form.Label>Contraseña*</Form.Label>
            <Form.Control type="password" required isInvalid placeholder="Ingrese la contraseña" 
            id="pass" name="pass" value={state.pass} onChange={handleChange}/>
          </Form.Group>
          <Form.Group >
            <Form.Label>Selecione el rol*</Form.Label>
            <Form.Control as="select" id="roles"  onChange={handleChange}>
                 <option >recolector</option>
                 <option >administrador</option>
            </Form.Control>
          </Form.Group>
          <br></br>

          {
            show && <Alert variant="danger" onClose={() => setShow(false)} >
            <Alert.Heading>Error, puede que el correo ya se encuentre en uso</Alert.Heading>
            <Button variant="danger"  onClick={() => setShow(false)}>
            cerrar
          </Button>
          </Alert>
          
          }

          
          <Button variant="primary"  onClick={()=>sendData(state)}>
            Agregar usuario
          </Button>
        </Form>
      </Container>
    </React.Fragment>

    </div>

  );
};

export default Usuario;
