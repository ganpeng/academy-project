import express from 'express';

import Constitution from '../controllers/constitution';


const router = express.Router();


router.get('/all', Constitution.getConstitutions);
router.get('/:id', Constitution.getConstitution);
router.post('/', Constitution.addConstitution);
router.put('/:id', Constitution.updateConstitution);
router.delete('/:id', Constitution.deleteConstitution);


export default router;
