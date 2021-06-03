import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React,{useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Header from '../components/Header'
import axios from 'axios'
import {API_BASE_URL} from '../services/apiUrl'

const Login = (props) => {

  const [state , setState] = useState({
    nombres:String,
    apellidos:String,
    cc:String,
    cargo:String,
    fecha_ingreso_a_la_empresa:Date,
    eps:String,
    fondo_pension:String,
    arl:String,
    diagnostico:String,
    evaluacion_medica:String,
    medico_general:String,
    medico_especialista:String,
    apoyo_diagnostico:String,
    medico_laboral:String,
    fecha_entrega_arl:Date,
    estado_arl:String,
    calificacion:String,
    area_sst:String,
    radicados:String,


   })
   
/*    const [archivos, setArchivos]=useState(null)
 */

   const handleChange = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  const sendData=(data)=>{
    const payload=data
    axios.post(API_BASE_URL+'enfermedadesData',payload)
    .then(function (response) {
      console.log(response)
      props.history.push('/enfermedadLaboral');      
  })
  .catch(function (error) {
    console.log(error)

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
          <Form.Group controlId="formBasicEmail">
            <Form.Label>NOMBRES*</Form.Label>
            <Form.Control type="Text" required isInvalid placeholder="Ingrese el nombre completo"
            id="nombres" name="nombres" value={state.nombres} onChange={handleChange} />
            <Form.Control.Feedback type="invalid">
              Este campo es requerido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>APELLIDOS*</Form.Label>
            <Form.Control type="Text" required isInvalid placeholder="Ingrese los apellidos"
            id="apellidos" name="apellidos" value={state.apellidos} onChange={handleChange} />
            <Form.Control.Feedback type="invalid">
              Este campo es requerido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>CEDULA DE CIUDADANIA*</Form.Label>
            <Form.Control type="Text" required isInvalid placeholder="Ingrese el numero de C.c." 
            id="cc" name="cc" value={state.cc} onChange={handleChange}/>
            <Form.Control.Feedback type="invalid">
              Este campo es requerido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>CARGO*</Form.Label>
            <Form.Control type="Text" placeholder="Ingrese el cargo" 
            id="cargo" name="cargo" value={state.cargo} onChange={handleChange}/>
          </Form.Group>
          <label for="start">FECHA DEL INGRESO A LA EMPRESA* : </label>
          <input type="date" name="fechaesperada" 
          id="fecha_ingreso_a_la_empresa" name="fecha_ingreso_a_la_empresa" value={state.fecha_ingreso_a_la_empresa} onChange={handleChange}/>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>EPS*</Form.Label>
            <Form.Control type="Text" placeholder="Ingrese eps" 
            id="eps" name="eps" value={state.eps} onChange={handleChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>FONDO DE PENSION*</Form.Label>
            <Form.Control type="Text" placeholder="Ingrese fondo de pension"
            id="fondo_pension" name="fondo_pension" value={state.fondo_pension} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>ARL*</Form.Label>
            <Form.Control type="Text" placeholder="Ingrese ARL"
            id="arl" name="arl" value={state.arl} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>DIAGNOSTICOS*</Form.Label>
            <Form.Control as="textarea" rows={3} 
            id="diagnostico" name="diagnostico" value={state.diagnostico} onChange={handleChange}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>EVALUACIÓN MÉDICA OCUPACIONAL*</Form.Label>
            <Form.Control as="select" id="evaluacion_medica" name="evaluacion_medica" 
            value={state.evaluacion_medica} onChange={handleChange}>
              <option>SI</option>
              <option>NO</option>
              <option>EN PROGRESO</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>MEDICO GENERAL*</Form.Label>
            <Form.Control type="Text" placeholder="Ingrese medico general" 
            id="medico_general" name="medico_general" value={state.medico_general} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>MEDICO ESPECIALISTA*</Form.Label>
            <Form.Control as="textarea" rows={3} 
            id="medico_especialista" name="medico_especialista" value={state.medico_especialista} onChange={handleChange}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>APOYO DIAGNOSTICOS*</Form.Label>
            <Form.Control as="textarea" rows={3} 
            id="apoyo_diagnostico" name="apoyo_diagnostico" value={state.apoyo_diagnostico} onChange={handleChange}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>MEDICO LABORAL*</Form.Label>
            <Form.Control as="select" id="medico_laboral" name="medico_laboral" value={state.medico_laboral} onChange={handleChange}>
              <option>SI</option>
              <option>NO</option>
            </Form.Control>
          </Form.Group>
          <label for="start">FECHA DE ENTREGA ARL* : </label>
          <input type="date" name="fechaesperada" 
          id="fecha_entrega_arl" name="fecha_entrega_arl" value={state.fecha_entrega_arl} onChange={handleChange}/>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>ESTADO ARL*</Form.Label>
            <Form.Control as="textarea" rows={3} 
            id="estado_arl" name="estado_arl" value={state.estado_arl} onChange={handleChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>CALIFICACIONES*</Form.Label>
            <Form.Control type="Text" placeholder="Ingrese calificacion" 
            id="calificacion" name="calificacion" value={state.calificacion} onChange={handleChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>ÁREA SST*</Form.Label>
            <Form.Control type="Text" placeholder="Ingrese SST" 
            id="area_sst" name="area_sst" value={state.area_sst} onChange={handleChange}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>RADICADOS*</Form.Label>
            <Form.Control as="textarea" rows={3} 
            id="radicados" name="radicados" value={state.radicados} onChange={handleChange}/>
          </Form.Group>          <br/>

          <Form.Group>
            <Form.File id="exampleFormControlFile1" label="ANEXOS" />
          </Form.Group>
          <br/>
          <Button variant="primary"  onClick={()=>sendData(state)}>
            Guardar
          </Button>
        </Form>
      </Container>
    </React.Fragment>
    </div>
  )
}

export default Login;
