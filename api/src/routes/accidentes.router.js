import { Router } from 'express';
import accidentesController from '../controllers/accidentes.controller';
import { verifyToken,isAdmin,isRecolector } from '../middlewares/autenticador.middel';

const router = Router();

//obtener todos
router.get('/accidentesData',[verifyToken,isRecolector],accidentesController.getAll);
//obtener uno por id
router.get('/accidentesData/:id'/* ,[verifyToken,isRecolector] */,  accidentesController.getOne);
//agregar
router.post('/accidentesData',/* [verifyToken,isRecolector], */ accidentesController.addAccidente);

//editar
router.put('/accidentesData/:id'/* ,[verifyToken,isAdmin] */,  accidentesController.editAccidente);
//eliminar
router.delete('/accidentesData/:id',/* [verifyToken,isAdmin], */ accidentesController.deleteAccidente);

router.post('/accidentesFiles/:id', accidentesController.addFiles );


export default router;

