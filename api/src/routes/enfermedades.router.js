import { Router } from 'express';
import EnfermedadesController from '../controllers/enfermedades.controller';
import { verifyToken,isAdmin,isRecolector } from '../middlewares/autenticador.middel';

const router = Router();

//obtener todos
router.get('/enfermedadesData'/* ,[verifyToken,isRecolector] */,EnfermedadesController.getAll);
//obtener uno por id
router.get('/enfermedadesData/:id',/* [verifyToken,isRecolector],  */ EnfermedadesController.getOne);
//agregar
router.post('/enfermedadesData'/* ,[verifyToken,isRecolector] */, EnfermedadesController.addEnfermedades);

//editar
router.put('/enfermedadesData/:id'/* ,[verifyToken,isAdmin] */,EnfermedadesController.editEnfermedades  );
//eliminar
router.delete('/enfermedadesData/:id',/* [verifyToken,isAdmin], */EnfermedadesController.deleteEnfermedades);

router.post('/enfermedadesFiles/:id', EnfermedadesController.addFiles );

export default router;