import express from 'express';

import Expert from '../controllers/expert';


const router = express.Router();


router.get('/all/:page', Expert.getExperts);
router.get('/:id', Expert.getExpert);
router.post('/', Expert.addExpert);
router.put('/:id', Expert.updateExpert);
router.delete('/:id', Expert.deleteExpert);


export default router;
