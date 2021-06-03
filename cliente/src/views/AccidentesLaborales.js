import React,{useState,useEffect } from 'react'
import MateriaTable from 'material-table'
import Header from '../components/Header'
import {Modal,  Button} from '@material-ui/core';
import axios from 'axios';
import {API_BASE_URL} from '../services/apiUrl'
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';

const baseUrl=API_BASE_URL;
const useStyles = makeStyles((theme) => ({
    modal: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    iconos:{
      cursor: 'pointer'
    }, 
    inputMaterial:{
      width: '100%'
    }
  }));
const TableEnfermedadLaboral=()=>{
    const styles= useStyles();



    const [state , setState] = useState({
        data:[],
        token:''
     
    })
    const [modalEliminar, setModalEliminar]= useState(false);
    const [modalOpciones, setModalOpciones]= useState(false);
    const [userSeleccionado, setUserSeleccionado]=useState({
        _id:'',
        nombres:'',
        apellidos:'',
        email:'',
        pass:'',
        roles:''
      })


    const data=state.data
    const columns=[
        {
        title:'Nombre',field:'nombres'
        },
        {
        title:'Apellido',field:'apellidos'
        },
        {
        title:'Cedula',field:'cc'
        },
        {
        title:'Fecha Creacion',field:'createdAt'
        }
        ,
        {
        title:'Fecha Editado',field:'updatedAt'
        }
    ]

    useEffect(() => {
        // code to run on component mount
        getData();
      }, [])


    const getData=()=>{
        const token =sessionStorage.getItem('x-token');
        const payload={
            "x-token": token
          }
        axios.get(API_BASE_URL+'accidentesData',{
            headers:payload
          })
        .then(function (response) {
            if(response.status === 200){
                let data = response.data
                setState({
                    data:data
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
    const peticionDelete=async(id)=>{
        await axios.delete(baseUrl+`accidentesData/${id}`)
        .then(response=>{
            window.location.reload(true);
        }).catch(error=>{
          console.log(error);
        }) 
      }
      const seleccionarUser=(user, caso)=>{
        setUserSeleccionado(user);
        (caso==="opciones")?       
        abrirCerrarModalOpciones()
        :
        abrirCerrarModalEliminar()
      }

    const abrirCerrarModalEliminar=()=>{
        setModalEliminar(!modalEliminar);
      }
    const abrirCerrarModalOpciones=()=>{
        setModalOpciones(!modalOpciones);
    }
    

      const bodyEliminar=(
        <div className={styles.modal}>
          <div align="right">
            <h3>Eliminar datos de: {userSeleccionado.nombres} </h3>

            <Button color="secondary" onClick={()=>peticionDelete(userSeleccionado._id)}>Sí</Button>
            <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>
    
          </div>
    
        </div>
      )

      const redirectModal=(
<div className={styles.modal}>
          <div align="right">
            <h3>Opciones </h3>
            <Link
                to={`/detallerAccidentes/${userSeleccionado._id}`}
            >
                <IconButton>
                    <VisibilityIcon style={{ fontSize: 50 }} color="primary"/>
                  
                </IconButton>
            </Link>

            <hr></hr>
            <br/>
            <Button onClick={()=>abrirCerrarModalOpciones()}>No</Button>
    
          </div>
    
        </div>
      )
    return(
        <div>
            <Header/>
        <div className="row">
            <div className="col-1"></div>
            <div className="col-10 auto">
              
            <Button variant="contained" color="primary" href="/addAccidente">agregar</Button>

            <MateriaTable title="Accidentes Laborales"
            data={data}
            columns={columns}
            actions={[
                {
                    icon: 'edit',
                    tooltip: 'Opciones',
                    onClick:(event, rowData)=>seleccionarUser(rowData,"opciones")
                },
                {
                    icon: 'delete',
                    tooltip: 'Eliminar',
                    onClick: (event, rowData) => seleccionarUser(rowData, "Eliminar")
                }
            ]}
            options={{
                actionsColumnIndex:-1
            }}
            localization={{
                header:{
                    actions: 'Acciones'
                }
            }}
            />
            </div>
            <div className="col-1"></div>

            
        </div>
        <Modal
        open={modalEliminar}
        onClose={abrirCerrarModalEliminar}>
          {bodyEliminar}
        </Modal>
        <Modal
        open={modalOpciones}
        onClose={abrirCerrarModalOpciones}>
          {redirectModal}
        </Modal>
        </div>
    )
}


export default TableEnfermedadLaboral;