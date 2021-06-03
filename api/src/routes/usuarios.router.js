import { Router } from 'express';
import usuariosController from '../controllers/usuarios.controller';
import { verifyToken,isAdmin } from '../middlewares/autenticador.middel';

const router = Router();

//obtener todos
router.get('/usuarios', /* [verifyToken, isAdmin], */usuariosController.getUsers);
//obtener uno por id
router.get('/usuarios/:id', /* [verifyToken, isAdmin], */  usuariosController.getUser);

//agregar
router.post('/usuarios',/*  [verifyToken, isAdmin], */ usuariosController.addUser);

//editar
router.put('/usuarios/:id',/*  [verifyToken, isAdmin], */  usuariosController.editUser);
//eliminar
router.delete('/usuarios/:id',/*  [verifyToken, isAdmin], */ usuariosController.deleteUser);

export default router;