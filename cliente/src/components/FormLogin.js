import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles/login'
import FlooterComponent from '../components/FlooterLogin'
import axios from 'axios'
import {API_BASE_URL} from '../services/apiUrl'
import {Redirect} from 'react-router-dom'
import Alert from '@material-ui/lab/Alert';



export default function SignInSide(props) {

  const classes = useStyles();
  const [state , setState] = useState({
    email : "",
    pass : "",
    successMessage: 0,
    Message: ''

    })

    const handleData=async(e)=>{
      console.log(state)
      valide();
    }

    const valide=()=>{
      const payload={
        "email":state.email,
        "pass":state.pass,
      } 
      axios.post(API_BASE_URL+'login', payload)
      .then(function (response) {
        console.log(response)
          if(response.status === 200){
              sessionStorage.setItem('x-token', response.data);
              window.location.reload(true);
          }
          else if(response.status === 202){
              setState({
                successMessage:1,
                Message:response.data.message

              })
          }

      })
      .catch(function (error) {
          alert('error al iniciar')
          console.log(error)
          
      });
    }
  const handleChange = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))

  }


  return (
    <Grid container component="main" className={classes.root}>
      {
         sessionStorage.getItem('x-token')?
         <Redirect to="/accidenteLaboral" />:null
      }
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Electronico"
              name="email"
              autoComplete="email"
              autoFocus
              value={state.email}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="pass"
              label="Contraseña"
              type="password"
              id="pass"
              autoComplete="current-password"
              value={state.pass}
              onChange={handleChange}
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={()=>handleData(state)}

            >
              iniciar
            </Button>
            {
              state.successMessage===1?
              <Alert severity="warning">{state.Message}</Alert>:null
            }

            <Box mt={5}>
              <FlooterComponent />
            </Box>
          </form>
        </div>

      </Grid>
    </Grid>
  );
}