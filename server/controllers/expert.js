import co from 'co';

import Expert from '../models/expert';

const LIMIT = 2;

export function getExperts(req, res) {
  co(function*() {
    let { page } = req.params;
    const skip = (parseInt(page) - 1) * LIMIT;
    const experts = yield Expert.find({}).skip(skip).limit(LIMIT).exec();
    const totalExperts = yield Expert.find({}).count().exec();
    const pages = Math.ceil(totalExperts / LIMIT);
    const currentPage = parseInt(page);
    return res.json({
      success: 'ok',
      result: {
        currentPage,
        pages,
        experts
      }
    });
  }).catch((err) => {
    console.log(err);
  })
}


export function getExpert(req, res) {
  co(function*() {
    const { id } = req.params;
    const expert = yield Expert.findById(id).exec();
    return res.json({
      success: 'ok',
      result: {
        expert
      }
    });

  }).catch((err) => {
    console.log(err);
  })
}

export function addExpert(req, res) {
  co(function* () {
    const expert = req.body;

    if (yield Expert.create(expert)) {
      return res.json({
        success: 'ok'
      })
    }

  }).catch((err) => {
    console.log(err);
  })
}


export function updateExpert(req, res) {
  co(function*() {
    const { id } = req.params;
    const update = req.body;

    yield Expert.findByIdAndUpdate(id, update).exec();

    return res.json({
      success: 'ok',
    })

  }).catch((err) => {
    console.log(err);
  })
}

export function deleteExpert(req, res) {
  co(function*() {
    const { id } = req.params;
    yield Expert.findByIdAndRemove(id).exec();

    return res.json({
      success: 'ok'
    })

  }).catch((err) => {
    console.log(err);
  })
}


export default {
  getExpert,
  getExperts,
  addExpert,
  updateExpert,
  deleteExpert
}


