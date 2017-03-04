import express from 'express';

import Leader from '../controllers/leader';


const router = express.Router();


router.get('/all/:page', Leader.getLeaders);
router.get('/:id', Leader.getLeader);
router.post('/', Leader.addLeader);
router.put('/:id', Leader.updateLeader);
router.delete('/:id', Leader.deleteLeader);


export default router;
