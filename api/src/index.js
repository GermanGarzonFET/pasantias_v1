import app from './app';
import conf from './config';
import './database';

//inicando el servidor

app.listen(conf.port, () => {
    console.log(`server http://localhost:${conf.port}/`);
})