import express from 'express';

import Leader from '../controllers/leader';


const router = express.Router();


router.get('/all', Leader.getLeaders);

router.post('/', Leader.addLeader);


export default router;
