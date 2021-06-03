import UsuariosSchema from '../models/usuarios.model';
import jwt from 'jsonwebtoken';
import config from '../config';
import RolSchema from '../models/roles.model';

const register = async(req, res) => {
    console.log('entre al registro')
    const {nombres, apellidos, email,pass,rol } = req.body;
    console.log(nombres, apellidos, email,pass,rol)
    const newUsuario = new UsuariosSchema({
        nombres,
        apellidos,
        email,
        pass: await UsuariosSchema.encryptPass(pass)
    });

    if (rol) {
        console.log('entre a la condicion de rol sin rol ')
        const foundRol = await RolSchema.find({ name: { $in: rol } });
        newUsuario.roles = foundRol.map(roles => roles._id)
    } else {
        console.log('entre al else de rol')
        const rol = await RolSchema.findOne({ name: "recolector" });
        newUsuario.roles = [rol._id]
    }

    const saveUsuario = await newUsuario.save();

    const token = jwt.sign({ id: saveUsuario._id }, config.SECRET_KEY, {
        expiresIn: 86400 //24 horas
    })
    console.log('registro completo')

    res.status(200).json({message:"ok, usuario agregado"});

};

const iniciar = async(req, res) => {

    const { email, pass } = req.body;

    const usuarioExiste = await UsuariosSchema.findOne({ email: email }).populate("rol");
    if (!usuarioExiste) {
        res.status(202).json({ message: "email no found" });
        return;
    };

    const comparePass = await UsuariosSchema.comparePass(pass, usuarioExiste.pass);
    if (!comparePass) {
       res.status(202).json({  message: 'contraseña mal' })
       return ;
    }

    const token = jwt.sign({ id: usuarioExiste._id }, config.SECRET_KEY, {
        expiresIn: 86400 //24 horas
    });

    res.json(token);


};

module.exports = {
    register,
    iniciar

}