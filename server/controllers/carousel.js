import co from 'co';

import Carousel from '../models/carousel';

const LIMIT = 10;


export function getCarousels(req, res) {
  co(function*() {
    let { page } = req.params;
    if (page == 0) {
      page = 1
    }
    const skip = (parseInt(page) - 1) * LIMIT;
    const carousels = yield Carousel.find({}).skip(skip).limit(LIMIT).exec();
    const totalCarousels = yield Carousel.find({}).count().exec();
    const pages = Math.ceil(totalCarousels / LIMIT);
    const currentPage = parseInt(page);
    return res.json({
      success: 'ok',
      result: {
        currentPage,
        pages,
        total: totalCarousels,
        carousels
      }
    });
  }).catch((err) => {
    console.log(err);
  })
}


export function getCarousel(req, res) {
  co(function*() {
    const { id } = req.params;
    const carousel = yield Carousel.findById(id).exec();
    return res.json({
      success: 'ok',
      result: {
        carousel
      }
    });

  }).catch((err) => {
    console.log(err);
  })
}


export function getShowCarousels(req, res) {
  co(function*() {
    const carousels = yield Carousel.find({
      show: true
    }).exec();
    return res.json({
      success: 'ok',
      result: {
        carousels
      }
    });

  }).catch((err) => {
    console.log(err);
  })
}






export function addCarousel(req, res) {
  co(function* () {
    const carousel = req.body;

    if (yield Carousel.create(carousel)) {
      return res.json({
        success: 'ok'
      })
    }

  }).catch((err) => {
    console.log(err);
  })
}


export function updateCarousel(req, res) {
  co(function*() {
    const { id } = req.params;
    const update = req.body;

    yield Carousel.findByIdAndUpdate(id, update).exec();

    return res.json({
      success: 'ok',
    })

  }).catch((err) => {
    console.log(err);
  })
}

export function deleteCarousel(req, res) {
  co(function*() {
    const { id } = req.params;
    yield Carousel.findByIdAndRemove(id).exec();

    return res.json({
      success: 'ok'
    })

  }).catch((err) => {
    console.log(err);
  })
}


export default {
  getCarousel,
  getCarousels,
  addCarousel,
  updateCarousel,
  deleteCarousel,
  getShowCarousels
}


