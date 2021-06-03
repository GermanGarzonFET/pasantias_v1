import UsuariosSchema from '../models/usuarios.model';



const getUsers = async(req, res, next) => {
    const userData = await UsuariosSchema.find();
    res.status(200).json(userData);
};
const getUser = async(req, res) => {
    const id_user = req.params.id;
    const userData = await UsuariosSchema.findById(id_user, (err, data) => {
        
        if (err) {
            res.status(400).json({ message: "user no encontrado" });
            return;


        }
        if (!data) {
            res.status(400).json({ message: "user no existe" });


        } else {
            return data
        }
    });
    console.log(userData);
    res.status(200).json(userData);


}
const addUser = (req, res) => {
    const { nombre, email, pass, roles } = req.body;
    res.json({ message: 'get add' })
}
const editUser =async (req, res) => {
    let id = req.params.id;
    try {
        const upData= await UsuariosSchema.findByIdAndUpdate(id,req.body, {
            new: true
        });
        res.status(200).json(upData);

    } catch (error) {
        res.status(400).json({message:"error al editar"});
        return

    }}
const deleteUser =async (req, res) => {
    let id = req.params.id;
    try {
        await UsuariosSchema.findByIdAndDelete(id);
    } catch (error) {
        console.log(error)
        res.status(200).json({ message: "error al eliminar" });
    }
    res.status(200).json({ message: "ok" })
}



module.exports = {
    getUsers,
    getUser,
    addUser,
    editUser,
    deleteUser
}