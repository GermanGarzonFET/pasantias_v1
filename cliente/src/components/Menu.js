import React from "react";
import { slide as Menu } from "react-burger-menu";
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import ContactsIcon from '@material-ui/icons/Contacts';
import IconButton from '@material-ui/core/IconButton';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import PeopleIcon from '@material-ui/icons/People';
import AccessibleIcon from '@material-ui/icons/Accessible';
import AirlineSeatFlatIcon from '@material-ui/icons/AirlineSeatFlat';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
function menu(props) {



    const salir=(e)=>{
      sessionStorage.removeItem('x-token');
      window.location.reload(true);
    }


    return (
    // Pass on our props
    <Menu {...props}>
      <IconButton variant="outlined" color="primary" href="/accidenteLaboral" >

        <AccessibleIcon style={{ fontSize: 50 }} color="lightBlue"/>
        <FormHelperText id="standard-weight-helper-text">Accidentes Laborales</FormHelperText>

      </IconButton>
      <br/>
      <IconButton variant="contained" color="primary" href="/enfermedadLaboral">
        <AirlineSeatFlatIcon style={{ fontSize: 50 }} color="lightBlue"/>
        <FormHelperText id="standard-weight-helper-text">Enfermedades Laborales</FormHelperText>

      </IconButton>

      <IconButton variant="contained" color="primary" href="/usuarios">
        <PeopleIcon style={{ fontSize: 50 }} color="lightBlue"/>
        <FormHelperText id="standard-weight-helper-text">Usuario</FormHelperText>

      </IconButton><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><hr/>
      <Button variant="contained" color="secondary" onClick={salir}  >

      <VpnKeyIcon style={{ fontSize: 50 }}/>
      <FormHelperText id="standard-weight-helper-text">Salir</FormHelperText>

      </Button><br/>
    </Menu>
  );
};
export default menu;