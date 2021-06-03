import { Router } from 'express';
import loginController from '../controllers/login.controller';
import { chekRoleExisted, chekUserExisted,chekCampos } from '../middlewares/login.middel';

const router = Router();

router.post('/register', [chekCampos,chekRoleExisted,chekUserExisted ], loginController.register);
router.post('/login' ,loginController.iniciar);

export default router;