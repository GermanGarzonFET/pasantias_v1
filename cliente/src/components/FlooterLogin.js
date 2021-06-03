import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Img from '../img/1.jpg'




function FlooterComponent() {

    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/GermanGarzonFET">
          FET
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        <img src={Img} width="400" height="150"  >
        </img>
      </Typography>
    );
  }


export default FlooterComponent;