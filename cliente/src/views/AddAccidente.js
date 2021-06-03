import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, {useState} from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../components/Header'
import axios from 'axios'
import {API_BASE_URL} from '../services/apiUrl'
import Uploader from '../components/Uploaders'

const Home = (props) => {

  const [state , setState] = useState({
    nombres:String,
    apellidos:String,
    cc:String,
    arl:String,
    eps:String,
    fecha_accidente: Date,
    tipo_contrato:String,
    cargo_del_accidentado:String,
    estado_arl:String,
    tipo_de_lesion:String,
    evaluacion_medica:String,
    calificaciones:String,
    sst:String,
   })
   
/*    const [archivos, setArchivos]=useState(null)
 */

   const handleChange = (e) => {
     console.log(e)
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  const sendData=(data)=>{
    const payload=data
    const getToken = sessionStorage.getItem('x-token')
/*     const token={
      "x-token":getToken
    } */
    console.log(payload)
    console.log(getToken)
    axios.post(API_BASE_URL+'accidentesData',payload)
    .then(function (response) {
      console.log(response)
      if(response.status === 200){
        console.log('ok, agregado')
        props.history.push('/accidenteLaboral');
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
          <Form.Group >
            <Form.Label>NOMBRES*</Form.Label>
            <Form.Control type="Text" required isInvalid placeholder="Ingrese el nombre completo" 
             id="nombres" name="nombres" value={state.nombres} onChange={handleChange}/>
            <Form.Control.Feedback type="invalid">
              Este campo es requerido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group >
            <Form.Label>APELLIDOS*</Form.Label>
            <Form.Control type="Text" required isInvalid placeholder="Ingrese los apellidos" 
             id="apellidos" name="apellidos" value={state.apellidos} onChange={handleChange}/>
            <Form.Control.Feedback type="invalid">
              Este campo es requerido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group >
            <Form.Label>CEDULA DE CIUDADANIA*</Form.Label>
            <Form.Control type="Text" required isInvalid placeholder="Ingrese el nombre completo" 
             id="cc" name="cc" value={state.cc} onChange={handleChange}/>
            <Form.Control.Feedback type="invalid">
              Este campo es requerido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group >
            <Form.Label>ARL*</Form.Label>
            <Form.Control type="Text" placeholder="Ingrese ARL" 
             id="arl" name="arl" value={state.arl} onChange={handleChange}/>
          </Form.Group>
          <Form.Group >
            <Form.Label>EPS*</Form.Label>
            <Form.Control type="Text" placeholder="Ingrese ARL" 
             id="eps" name="eps" value={state.eps} onChange={handleChange}/>
          </Form.Group>
          <label for="start">FECHA DEL ACCIDENTE* :</label>
          <input type="date"id="fecha_accidente" name="fecha_accidente" value={state.fecha_accidente} onChange={handleChange}/>
          <Form.Group >
            <Form.Label>TIPO DE CONTRATO*</Form.Label>
            <Form.Control type="Text" placeholder="Ingrese tipo de contrato" 
             id="tipo_contrato" name="tipo_contrato" value={state.tipo_contrato} onChange={handleChange}/>
          </Form.Group>
          <Form.Group >
            <Form.Label>CARGO DEL ACCIDENTADO*</Form.Label>
            <Form.Control type="Text" placeholder="Ingrese cargo del accidentado" 
             id="cargo_del_accidentado" name="cargo_del_accidentado" value={state.cargo_del_accidentado} onChange={handleChange}/>
          </Form.Group>
          <Form.Group >
            <Form.Label>ESTADO DE ARL*</Form.Label>
            <Form.Control as="textarea" rows={3} 
             id="estado_arl" name="estado_arl" value={state.estado_arl} onChange={handleChange}/>
          </Form.Group>
          <Form.Group >
            <Form.Label>TIPO DE LESION*</Form.Label>
            <Form.Control as="textarea" rows={3} 
             id="tipo_de_lesion" name="tipo_de_lesion" value={state.tipo_de_lesion} onChange={handleChange}/>
          </Form.Group>
          <Form.Group >
            <Form.Label>EVALUACION MEDICA OCUPACIONAL*</Form.Label>
            <Form.Control as="textarea" rows={3} 
             id="evaluacion_medica" name="evaluacion_medica" value={state.evaluacion_medica} onChange={handleChange}/>
          </Form.Group>
          <Form.Group >
            <Form.Label>CALIFICACIONES*</Form.Label>
            <Form.Control type="Text" placeholder="Ingrese calificacion" 
             id="calificaciones" name="calificaciones" value={state.calificaciones} onChange={handleChange}/>
          </Form.Group>
          <Form.Group >
            <Form.Label>SST*</Form.Label>
            <Form.Control type="Text" placeholder="Ingrese SST" 
             id="sst" name="sst" value={state.sst} onChange={handleChange}/>
          </Form.Group>
          <Form.Group>
          <Form.Label>files</Form.Label>
            <input type="file" name="files" multiple onChange={handleChange} />
          </Form.Group>
          <Button variant="primary"  onClick={()=>sendData(state)} >
            Guardar
          </Button>

        </Form>
      </Container>
    </React.Fragment>
    </div>
    
  );
};


export default Home;
