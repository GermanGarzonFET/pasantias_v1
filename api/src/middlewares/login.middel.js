import RolesSchema from '../models/roles.model';
import UsuariosSchema from '../models/usuarios.model';
import jwt, { verify } from 'jsonwebtoken';
import config from '../config';

export const chekUserExisted = async(req, res, next) => {
        console.log('soy el middelware de chekUserExisted')
/*     const nombre = req.body.nombre;
 */    const email = req.body.email;
/*     const Nombre = await UsuariosSchema.findOne({ nombre: nombre });
 */    const Email = await UsuariosSchema.findOne({ email: email });
/*     if (Nombre) {
        return res.status(400).json({ message: "El  nombre de usuario ya existe" });
    }; */
    if (Email) {
        console.log('entre a la condicion de correo')
        return res.status(202).json({ message: "El  email ya se encuentra en uso" });
    };
    next();

};


export const chekRoleExisted = async(req, res, next) => {
    const Roles = ["admin", "recolector"];
    const rol = req.body.rol;
    console.log('entre al middleware de chekRoleExisted');


    if (rol) {
        for (let i = 0; i < rol.length; i++) {
/*             console.log(rol[i]);
            console.log('entre al for'); */
            if (!Roles.includes(rol[i])) {

                return res.status(202).json({
                    message: `Role ${rol[i]} no existe`
                })
            }
        }
    }
    next();

};

export const chekCampos = async(req,res,next)=>{
    console.log('soy el middleware de chekCampos')
    const {nombres, apellidos, email,pass } = req.body;

    if(nombres==''){
        return res.status(202).json({ message: "ingrese nombres" });
    }
    if(apellidos==''){
        return res.status(202).json({ message: "ingrese apellido" });
    }
    if(email==''){
        return res.status(202).json({ message: "ingrese email" });
    }
    if(pass==''){
        return res.status(202).json({ message: "ingrese contraseña" });
    }
    next();

}
