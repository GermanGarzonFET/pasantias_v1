import { Router } from 'express';
import rolesController from '../controllers/roles.controller';

const router = Router();

//obtener todos
router.get('/roles',  rolesController.gerRoles);


export default router;