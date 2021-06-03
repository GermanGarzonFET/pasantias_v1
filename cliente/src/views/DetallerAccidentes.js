import React,{useEffect,useState} from 'react'
import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {API_BASE_URL} from '../services/apiUrl'
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
        _id:String,
       })
    const [edit, setEdit]=useState(false)
    const mostrarEdit=()=>{
        setEdit(!edit);
      }
    const [accidenteData, setAccidenteData]=useState({
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
        axios.get(API_BASE_URL+`accidentesData/${id}`)
        .then(function (response) {
            if(response.status === 200){
                let data = response.data
                setState({
                    nombres:data.nombres,
                    apellidos:data.apellidos,
                    cc:data.cc,
                    arl:data.arl,
                    eps:data.eps,
                    fecha_accidente: data.fecha_accidente,
                    tipo_contrato:data.tipo_contrato,
                    cargo_del_accidentado:data.cargo_del_accidentado,
                    estado_arl:data.estado_arl,
                    tipo_de_lesion:data.tipo_de_lesion,
                    evaluacion_medica:data.evaluacion_medica,
                    calificaciones:data.calificaciones,
                    sst:data.sst,
                    _id:data._id
                })
                setAnexos(data.anexos)
                setAccidenteData({
                    nombres:data.nombres,
                    apellidos:data.apellidos,
                    cc:data.cc,
                    arl:data.arl,
                    eps:data.eps,
                    fecha_accidente: data.fecha_accidente,
                    tipo_contrato:data.tipo_contrato,
                    cargo_del_accidentado:data.cargo_del_accidentado,
                    estado_arl:data.estado_arl,
                    tipo_de_lesion:data.tipo_de_lesion,
                    evaluacion_medica:data.evaluacion_medica,
                    calificaciones:data.calificaciones,
                    sst:data.sst,
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
        axios.put(API_BASE_URL+`accidentesData/${id}`,payload)
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
                                    Datos Accidente: {state.nombres}
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
                                <h4> Arl: </h4>
                                
                            </div>
                            <div className=" col-9">
                            <TextField id="filled-basic"  variant="filled"
                                value={state.arl}
                                id="arl"
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
                                <h4> Tipo Contraro: </h4>
                                
                            </div>
                            <div className=" col-9">
                            <TextField id="filled-basic"  variant="filled"
                                value={state.tipo_contrato}
                                id="tipo_contrato"onChange={handleChange}
                            />                              </div>
                        </div>
                        <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Cargo Del Accidentado: </h4>
                                
                            </div>
                            <div className=" col-9">
                            <TextField id="filled-basic" fullWidth multiline variant="filled"
                                value={state.cargo_del_accidentado}
                                id="cargo_del_accidentado"onChange={handleChange}
                            />                              </div>
                        </div>
                       <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Estado ARL: </h4>
                                
                            </div>
                            <div className=" col-9">
                            <TextField id="filled-basic"  variant="filled"
                                value={state.estado_arl}
                                id="estado_arl"onChange={handleChange}
                            />                              </div>
                        </div>
                       <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Tipo Lesion: </h4>
                                
                            </div>
                            <div className=" col-9">
                            <TextField id="filled-basic" fullWidth multiline variant="filled"
                                value={state.tipo_de_lesion}
                                id="tipo_de_lesion"onChange={handleChange}
                            />                              </div>
                        </div>
                        <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Evaluacion Medica: </h4>
                                
                            </div>
                            <div className=" col-9">
                            <TextField fullWidth multiline id="filled-basic"  variant="filled"
                                value={state.evaluacion_medica} type="textarea"
                                id="evaluacion_medica"onChange={handleChange}
                            />                              </div>
                        </div>
                        <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Calificacion: </h4>
                                
                            </div>
                            <div className=" col-9">
                            <TextField id="filled-basic" fullWidth multiline  variant="filled"
                                value={state.calificaciones}
                                id="calificaciones"onChange={handleChange}
                            />                              </div>
                        </div>
                        <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> SST: </h4>
                                
                            </div>
                            <div className=" col-9">
                            <TextField id="filled-basic" fullWidth multiline variant="filled"
                                value={state.sst}
                                id="sst"onChange={handleChange}
                            />                              </div>
                        </div>
                        <br/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Anexos: </h4>
                                
                            </div>
                        </div>
                        <br/>
                    </div>

                        <Files
                            id={id}
                            ruta="accidentesFiles"
                        />
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
                                <h4> Arl: </h4>
                                
                            </div>
                            <div className="body-seccion col-9">
                                <h4> {accidenteData.arl} </h4>                                
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
                                <h4> Fecha Accidente: </h4>
                                
                            </div>
                            <div className="body-seccion col-9">
                                <h4> {accidenteData.fecha_accidente} </h4>                                
                            </div>
                        </div>
                      <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Tipo Contraro: </h4>
                                
                            </div>
                            <div className="body-seccion col-9">
                                <h4> {accidenteData.tipo_contrato} </h4>                                
                            </div>
                        </div>
                        <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Cargo Del Accidentado: </h4>
                                
                            </div>
                            <div className="body-seccion col-9">
                                <h4> {accidenteData.cargo_del_accidentado} </h4>                                
                            </div>
                        </div>
                       <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Estado ARL: </h4>
                                
                            </div>
                            <div className="body-seccion col-9">
                                <h4> {accidenteData.estado_arl} </h4>                                
                            </div>
                        </div>
                       <hr/>
                        <div class=" cuerpo row" >
                            <div className="col">
                                <h4> Tipo Lesion: </h4>
                                
                            </div>
                            <div className="body-seccion col-9">
                                <h4> {accidenteData.tipo_de_lesion} </h4>                                
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
                                <h4> SST: </h4>
                                
                            </div>
                            <div className="body-seccion col-9">
                                <h4> {accidenteData.sst} </h4>                                
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
                                }  
                            </div>
                        </div>
                        <br/>




                    </div>
                    </div>

                }
               
            </div>

        
    )
    

}

export default DetallerAccidentes;