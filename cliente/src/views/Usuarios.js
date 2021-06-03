import Form from 'react-bootstrap/Form'
import Header from '../components/Header'
import React, { useState, useEffect } from 'react';
import MaterialTable from "material-table";
import axios from 'axios';
import {Modal,  Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {API_BASE_URL} from '../services/apiUrl'

const columns= [
  { title: 'nombres', field: 'nombres' },
  { title: 'apellidos', field: 'apellidos' },
  { title: 'email(s)', field: 'email' },
  { title: 'createdAt', field: 'createdAt', type: 'date'}
];
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

function TableUsuarios() {
  const styles= useStyles();
  const [data, setData]= useState([]);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);
  const [userSeleccionado, setUserSeleccionado]=useState({
    _id:'',
    nombres:'',
    apellidos:'',
    email:'',
    pass:'',
    roles:''
  })

  const handleChange = (e) => {
    console.log(e)
   const {id , value} = e.target   
   setUserSeleccionado(prevState => ({
       ...prevState,
       [id] : value
   }))


 }

  const peticionGet=async()=>{
    const token =sessionStorage.getItem('x-token');
    const payload={
        "x-token": token
      }
    await axios.get(baseUrl+'usuarios',{
        headers:payload
    })
    .then(response=>{
     setData(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }



  const peticionPut=async(data,id )=>{
    const payload={
        "nombres": data.nombres,
        "apellidos":data.apellidos,
        "email":data.email
      }
    await axios.put(baseUrl+`usuarios/${id}`,payload)
    .then(response=>{
        window.location.reload(true);
    }).catch(error=>{
      console.log(error);
    })  }

  const peticionDelete=async(id)=>{
    await axios.delete(baseUrl+`usuarios/${id}`)
    .then(response=>{
        window.location.reload(true);
    }).catch(error=>{
      console.log(error);
    }) 
  }

  const seleccionarUser=(user, caso)=>{
    setUserSeleccionado(user);
    (caso==="Editar")?abrirCerrarModalEditar()
    :
    abrirCerrarModalEliminar()
  }
  
  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  useEffect(()=>{
    peticionGet();
  }, [])


  const bodyEditar=(
    <div className={styles.modal}>
      <h3>Editar usuario</h3>
      <br />
      <Form>
          <br />
          <Form.Group >
            <Form.Label>NOMBRES*</Form.Label>
            <Form.Control type="Text" placeholder="Ingrese el nombre completo" 
             id="nombres" name="nombres" value={userSeleccionado&&userSeleccionado.nombres} onChange={handleChange}/>
            <Form.Control.Feedback type="invalid">
              Este campo es requerido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group >
            <Form.Label>APELLIDOS*</Form.Label>
            <Form.Control type="Text" placeholder="Ingrese los apellidos" 
             id="apellidos" name="apellidos" value={userSeleccionado&&userSeleccionado.apellidos} onChange={handleChange}/>
            <Form.Control.Feedback type="invalid">
              Este campo es requerido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group >
            <Form.Label>Correo electronico*</Form.Label>
            <Form.Control type="text"placeholder="Ingrese el correo" 
            id="email" name="email" value={userSeleccionado&&userSeleccionado.email} onChange={handleChange}/>
          </Form.Group>


        </Form>
      <div align="right">
        <Button color="primary" onClick={()=>peticionPut(userSeleccionado,userSeleccionado._id)}>Editar</Button>
        <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEliminar=(
    <div className={styles.modal}>
      <div align="right">
        <h3>Eliminar datos de: {userSeleccionado.nombres} </h3>
        <Button color="secondary" onClick={()=>peticionDelete(userSeleccionado._id)}>Sí</Button>
        <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>

      </div>

    </div>
  )

  return (
    <div >
        <Header/>
        <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
        <Button variant="contained" color="primary" href="/addUsuarios">agregar</Button>
        <br/>
     <MaterialTable
          columns={columns}
          data={data}
          title="Usuarios"  
          actions={[
            {
              icon: 'edit',
              tooltip: 'Editar Artista',
              onClick: (event, rowData) => seleccionarUser(rowData, "Editar")
            },
            {
              icon: 'delete',
              tooltip: 'Eliminar Artista',
              onClick: (event, rowData) => seleccionarUser(rowData, "Eliminar")
            }
          ]}
          options={{
            actionsColumnIndex: -1,
          }}
          localization={{
            header:{
              actions: "Acciones"
            }
          }}
        />
        
        <Modal
        open={modalEditar}
        onClose={abrirCerrarModalEditar}>
          {bodyEditar}
        </Modal>

        <Modal
        open={modalEliminar}
        onClose={abrirCerrarModalEliminar}>
          {bodyEliminar}
        </Modal>
        </div>
        <div className="col-1"></div>           
        </div>
    </div>
  );
}

export default TableUsuarios;