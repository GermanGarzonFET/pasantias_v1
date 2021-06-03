//conexion a base de datos
import conf from './config';
import mongoose from 'mongoose';
mongoose.connect(conf.db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(db => console.log('DB in On!!'))
    .then(err => console.log(err));