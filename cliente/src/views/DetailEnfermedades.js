import React,{useEffect,useState} from 'react'
import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {API_BASE_URL} from '../services/apiUrl'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Button } from 'bootstrap'
import TextField from '@material-ui/core/TextField';
import '../styles/detail.css'
import EditIcon from '@material-ui/icons/Edit';
import { green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import Files from '../components/files'


const DetallerAccidentes=()=>{

    const {id}=useParams()
    const [anexos, setAnexos]=useState([])
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
        _id:String        
       })
    const [edit, setEdit]=useState(false)
    const mostrarEdit=()=>{
        setEdit(!edit);
      }
    const [accidenteData, setAccidenteData]=useState({
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
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))

    }

    useEffect(() => {
        getData(id);
      }, [])

    const getData=(id)=>{
        axios.get(API_BASE_URL+`enfermedadesData/${id}`)
        .then(function (response) {
            if(response.status === 200){
                let data = response.data
                setState({
                    nombres:data.nombres,
                    apellidos:data.apellidos,
                    cc:data.cc,
                    cargo:data.cargo,
                    fecha_ingreso_a_la_empresa:data.fecha_ingreso_a_la_empresa,
                    eps:data.eps,
                    fondo_pension:data.fondo_pension,
                    arl:data.arl,
                    diagnostico:data.diagnostico,
                    evaluacion_medica:data.evaluacion_medica,
                    medico_general:data.medico_general,
                    medico_especialista:data.medico_especialista,
                    apoyo_diagnostico:data.apoyo_diagnostico,
                    medico_laboral:data.medico_laboral,
                    fecha_entrega_arl:data.fecha_entrega_arl,
                    estado_arl:data.estado_arl,
                    calificacion:data.calificacion,
                    area_sst:data.area_sst,
                    radicados:data.radicados,
                    _id:data._id
                })
                setAnexos(data.anexos)

                setAccidenteData({
                    nombres:data.nombres,
                    apellidos:data.apellidos,
                    cc:data.cc,
                    cargo:data.cargo,
                    fecha_ingreso_a_la_empresa:data.fecha_ingreso_a_la_empresa,
                    eps:data.eps,
                    fondo_pension:data.fondo_pension,
                    arl:data.arl,
                    diagnostico:data.diagnostico,
                    evaluacion_medica:data.evaluacion_medica,
                    medico_general:data.medico_general,
                    medico_especialista:data.medico_especialista,
                    apoyo_diagnostico:data.apoyo_diagnostico,
                    medico_laboral:data.medico_laboral,
                    fecha_entrega_arl:data.fecha_entrega_arl,
                    estado_arl:data.estado_arl,
                    calificacion:data.calificacion,
                    area_sst:data.area_sst,
                    radicados:data.radicados,
                })
            }
            else if(response.status === 404){
                alert('Username and password do not match')
            }
            else{
                alert('Username does not exists')
            }
        })
        .catch(function (error) {
            console.log(error)
            
        });
    }

    const editarData =(data,id)=>{
        console.log(data,id)
        const payload = data;
        axios.put(API_BASE_URL+`enfermedadesData/${id}`,payload)
        .then(function (response) {
            if(response.status === 200){
                console.log(response)
                window.location.reload(true);
            }
            else if(response.status === 202){
                alert('error')
            }
            else{
                alert('error')
            }
        })
        .catch(function (error) {
            console.log(error)
            
        });
    }

        return(
            <div>
                <Header></Header>
                {
                    edit?
                    <div> <IconButton onClick={mostrarEdit} >
                    <EditIcon style={{ fontSize: 50 ,color: green[500]}}/>
                </IconButton>

                <IconButton onClick={()=>editarData(state,state._id)} >
                    <SaveIcon style={{ fontSize: 50 }} color="primary"/>
                </IconButton>
                </div>
                :
                    
                <IconButton onClick={mostrarEdit} >
                    <EditIcon style={{ fontSize: 50 ,color: green[500]}}/>
                </IconButton>
                }

                {
                    edit?
                    <div className="row">

                        <div className="col-1"></div>
                        <div className="col-10">
                            <h1>Editar datos</h1>
                            <div className="title">

                                <h1 > 
                                    Datos Enfermedades Laborales: {state.nombres}
                                </h1>
                            <hr/>
                            <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Nombres: </h4>
                                
                            </div>
                            <div className="col-9">
                            <TextField id="filled-basic"  variant="filled"
                                value={state.nombres}
                                id="nombres"
                                onChange={handleChange}
                            />                            
                            </div>
                               
                            </div>
                            <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Apellidos: </h4>
                                
                            </div>
                            <div className="col-9">
                            <TextField id="filled-basic"  variant="filled"
                                value={state.apellidos}
                                id="apellidos"
                                onChange={handleChange}
                            />                            
                            </div>
                               
                            </div>
                        </div>
                       <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> CC: </h4>
                                
                            </div>
                            <div className=" col-9">
                            <TextField id="filled-basic"  variant="filled"
                                value={state.cc}
                                id="cc"
                                onChange={handleChange}
                            />                              </div>
                        </div>
                        <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Cargo: </h4>
                                
                            </div>
                            <div className=" col-9">
                            <TextField id="filled-basic"  variant="filled"
                                value={state.cargo}
                                id="cargo"
                                onChange={handleChange}
                            />                              </div>
                        </div>
                        <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Eps: </h4>
                                
                            </div>
                            <div className=" col-9">
                            <TextField id="filled-basic"  variant="filled"
                                value={state.eps}
                                id="eps"onChange={handleChange}
                            />                              </div>
                        </div>
                       <hr/>

                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Fondo Pension: </h4>
                                
                            </div>
                            <div className=" col-9">
                            <TextField id="filled-basic"  variant="filled"
                                value={state.fondo_pension}
                                id="fondo_pension"onChange={handleChange}
                            />                              </div>
                        </div>
                        <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Arl: </h4>
                                
                            </div>
                            <div className=" col-9">
                            <TextField id="filled-basic" fullWidth multiline variant="filled"
                                value={state.arl}
                                id="arl"onChange={handleChange}
                            />                              </div>
                        </div>
                       <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Diagnostico: </h4>
                                
                            </div>
                            <div className=" col-9">
                            <TextField id="filled-basic"  variant="filled"
                                value={state.diagnostico}
                                id="diagnostico"onChange={handleChange}
                            />                              </div>
                        </div>
                       <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Evaluacion Medica: </h4>
                                
                            </div>
                            <div className=" col-9">
                            <TextField id="filled-basic" fullWidth multiline variant="filled"
                                value={state.evaluacion_medica} type="textarea"
                                id="evaluacion_medica"onChange={handleChange}
                            />                              </div>
                        </div>
                        <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Medico General: </h4>
                                
                            </div>
                            <div className=" col-9">
                            <TextField fullWidth multiline id="filled-basic"  variant="filled"
                                value={state.medico_general} type="textarea"
                                id="medico_general"onChange={handleChange}
                            />                              </div>
                        </div>
                        <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Medico Especialista: </h4>
                                
                            </div>
                            <div className=" col-9">
                            <TextField id="filled-basic" fullWidth multiline  variant="filled"
                                value={state.medico_especialista}
                                id="medico_especialista"onChange={handleChange}
                            />                              </div>
                        </div>
                        <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Apoyo Diagnostico: </h4>
                                
                            </div>
                            <div className=" col-9">
                            <TextField id="filled-basic" fullWidth multiline variant="filled"
                                value={state.apoyo_diagnostico}
                                id="apoyo_diagnostico"onChange={handleChange}
                            />                              </div>
                        </div>
                        <br/>
                        <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Medico Laboral: </h4>
                                
                            </div>
                            <div className=" col-9">
                            <TextField id="filled-basic" fullWidth multiline variant="filled"
                                value={state.medico_laboral}
                                id="medico_laboral"onChange={handleChange}
                            />                              </div>
                        </div>
                        <br/>
                        <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Estado Arl: </h4>
                                
                            </div>
                            <div className=" col-9">
                            <TextField id="filled-basic" fullWidth multiline variant="filled"
                                value={state.estado_arl}
                                id="estado_arl"onChange={handleChange}
                            />                              </div>
                        </div>
                        <br/>
                        <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Calificacion: </h4>
                                
                            </div>
                            <div className=" col-9">
                            <TextField id="filled-basic" fullWidth multiline variant="filled"
                                value={state.calificacion}
                                id="calificacion"onChange={handleChange}
                            />                              </div>
                        </div>
                        <br/>
                        <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Area SST: </h4>
                                
                            </div>
                            <div className=" col-9">
                            <TextField id="filled-basic" fullWidth multiline variant="filled"
                                value={state.area_sst}
                                id="area_sst"onChange={handleChange}
                            />                              </div>
                        </div>
                        <br/>
                        <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> radicados: </h4>
                                
                            </div>
                            <div className=" col-9">
                            <TextField id="filled-basic" fullWidth multiline variant="filled"
                                value={state.radicados}
                                id="radicados"onChange={handleChange}
                            />                              </div>
                        </div>
                        <br/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Anexos: </h4>
                                
                            </div>
                            <div className=" col*">
                                <h4> Los axenzos</h4>                                
                            </div>
                            
                        <Files
                            id={id}
                            ruta="enfermedadesFiles"
                        />
                        </div>
                        <br/>
                    </div>
                    </div>
                    :
                    <div className="row">

                        <div className="col-1"></div>
                        <div className="col-10">
                            <div className="title">
                                <h1 > 
                                    Datos Accidente: {accidenteData.nombres}
                                </h1>
                            </div>
                            <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Apellidos: </h4>
                                
                            </div>
                            <div className="body-seccion col-9">
                                <h4> {accidenteData.apellidos} </h4>                                
                            </div>
                        </div>
                       <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> CC: </h4>
                                
                            </div>
                            <div className="body-seccion col-9">
                                <h4> {accidenteData.cc} </h4>                                
                            </div>
                        </div>
                        <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> cargo: </h4>
                                
                            </div>
                            <div className="body-seccion col-9">
                                <h4> {accidenteData.cargo} </h4>                                
                            </div>
                        </div>
                        <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Eps: </h4>
                                
                            </div>
                            <div className="body-seccion col-9">
                                <h4> {accidenteData.eps} </h4>                                
                            </div>
                        </div>
                       <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Fecha Ingreso a la empresa: </h4>
                                
                            </div>
                            <div className="body-seccion col-9">
                                <h4> {accidenteData.fecha_ingreso_a_la_empresa} </h4>                                
                            </div>
                        </div>
                      <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Fondo de Pension: </h4>
                                
                            </div>
                            <div className="body-seccion col-9">
                                <h4> {accidenteData.fondo_pension} </h4>                                
                            </div>
                        </div>
                        <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Arl: </h4>
                                
                            </div>
                            <div className="body-seccion col-9">
                                <h4> {accidenteData.arl} </h4>                                
                            </div>
                        </div>
                       <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Diagnostico: </h4>
                                
                            </div>
                            <div className="body-seccion col-9">
                                <h4> {accidenteData.diagnostico} </h4>                                
                            </div>
                        </div>
                       <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Evaluacion Medica: </h4>
                                
                            </div>
                            <div className="body-seccion col-9">
                                <h4> {accidenteData.evaluacion_medica} </h4>                                
                            </div>
                        </div>
                        <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Medico General: </h4>
                                
                            </div>
                            <div className="body-seccion col-9">
                                <h4> {accidenteData.medico_general} </h4>                                
                            </div>
                        </div>
                        <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Apoyo Diagnostico: </h4>
                                
                            </div>
                            <div className="body-seccion col-9">
                                <h4> {accidenteData.apoyo_diagnostico} </h4>                                
                            </div>
                        </div>
                        <br/>
                        <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Medico Laboral: </h4>
                                
                            </div>
                            <div className="body-seccion col-9">
                                <h4> {accidenteData.medico_laboral} </h4>                                
                            </div>
                        </div>
                        <br/>
                        <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Estado Arl : </h4>
                                
                            </div>
                            <div className="body-seccion col-9">
                                <h4> {accidenteData.estado_arl} </h4>                                
                            </div>
                        </div>
                        <br/>
                        <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Calificacion : </h4>
                                
                            </div>
                            <div className="body-seccion col-9">
                                <h4> {accidenteData.calificacion} </h4>                                
                            </div>
                        </div>
                        <br/>
                        <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Area SST : </h4>
                                
                            </div>
                            <div className="body-seccion col-9">
                                <h4> {accidenteData.area_sst} </h4>                                
                            </div>
                        </div>
                        <br/>
                        <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4>  Radicados: </h4>
                                
                            </div>
                            <div className="body-seccion col-9">
                                <h4> {accidenteData.radicados} </h4>                                
                            </div>
                        </div>
                        <br/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Anexos: </h4>
                                
                            </div>
                            <div className="body-seccion col*">
                            {
                                    anexos.map((data)=>(
                                        <div>
                                           <hr/> 
                                        <img src={data} width="600" height="400"  />
                                        <br/>
                                        </div>
                                    ))
                                }                             </div>
                        </div>
                        <br/>




                    </div>
                    </div>

                }
               
            </div>

        
    )
    

}

export default DetallerAccidentes;