import express from 'express';

import Carousel from '../controllers/carousel';


const router = express.Router();


router.get('/all/:page', Carousel.getCarousels);
router.get('/:id', Carousel.getCarousel);
router.post('/', Carousel.addCarousel);
router.put('/:id', Carousel.updateCarousel);
router.delete('/:id', Carousel.deleteCarousel);


export default router;

