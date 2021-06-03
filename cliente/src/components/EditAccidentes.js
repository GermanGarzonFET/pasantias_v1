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

import '../styles/detail.css'

const DetallerAccidentes=()=>{

    const {id}=useParams()
    const [state , setState] = useState({
        data:[],        
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
        console.log(e)
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
                    data:data
                })
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


        return(
            <div>
               
            </div>

        
    )
    

}

export default DetallerAccidentes;