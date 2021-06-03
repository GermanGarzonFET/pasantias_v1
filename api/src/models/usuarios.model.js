import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs'

const UsuariosSchema = new Schema({
    nombres: {
        type: String,
    },
    apellidos: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    pass: {
        type: String,
        required: true
    },
    roles: [{ //aqui van los rolres que tenga (admin,moderador,usuario etc)
        ref: "Roles",
        type: Schema.Types.ObjectId
    }]

}, {
    timestamps: true
});


UsuariosSchema.static('encryptPass', (pass) => {
    return bcrypt.hashSync(pass, bcrypt.genSaltSync(5), null);
});

UsuariosSchema.static('comparePass', (pass, recivePass) => {
    return bcrypt.compare(pass, recivePass);

});



export default model("Usuarios", UsuariosSchema);