import RolesSchema from '../models/roles.model';
import Users from '../models/usuarios.model';

export const createRoles = async() => {
    try {
        const contador = await RolesSchema.estimatedDocumentCount();
        
        if (contador > 0) return;
        const values = await Promise.all([
            new RolesSchema({ name: 'recolector' }).save(),
            new RolesSchema({ name: 'admin' }).save(),
        ]);
        const roles=[]
        for (let index = 0; index < values.length; index++) {
            const rol=values[index];
            roles.push(rol._id);
        }
        const contador2 = await Users.estimatedDocumentCount();
        if (contador2 > 0) return;
        const valuesUser = await Promise.all([
            new Users({
                nombres:'admin',
                apellidos:'admin',
                email:'admin@correo',
                pass:"admin@data",
                roles:roles
            }).save()
        ]);
        console.log(valuesUser);




    } catch (error) {
        console.log(error);
    }


}