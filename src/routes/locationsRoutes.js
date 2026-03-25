import { Router } from 'express';
import { getLocationsController } from '../controllers/locationsController.js';

const router = Router();

router.get('/locations', getLocationsController);

export default router;