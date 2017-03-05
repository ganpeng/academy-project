import co from 'co';

import Constitution from '../models/constitution';


export function getConstitutions(req, res) {
  co(function*() {
    const constitution = yield Constitution.findOne({}).exec();
    return res.json({
      success: 'ok',
      result: {
        constitution
      }
    });
  }).catch((err) => {
    console.log(err);
  })
}


export function getConstitution(req, res) {
  co(function*() {
    const { id } = req.params;
    const constitution = yield Constitution.findById(id).exec();
    return res.json({
      success: 'ok',
      result: {
        constitution
      }
    });

  }).catch((err) => {
    console.log(err);
  })
}

export function addConstitution(req, res) {
  co(function* () {
    const constitution = req.body;

    if (yield Constitution.create(constitution)) {
      return res.json({
        success: 'ok'
      })
    }

  }).catch((err) => {
    console.log(err);
  })
}


export function updateConstitution(req, res) {
  co(function*() {
    const { id } = req.params;
    const update = req.body;

    yield Constitution.findByIdAndUpdate(id, update).exec();

    return res.json({
      success: 'ok',
    })

  }).catch((err) => {
    console.log(err);
  })
}

export function deleteConstitution(req, res) {
  co(function*() {
    const { id } = req.params;
    yield Constitution.findByIdAndRemove(id).exec();

    return res.json({
      success: 'ok'
    })

  }).catch((err) => {
    console.log(err);
  })
}


export default {
  getConstitution,
  getConstitutions,
  addConstitution,
  updateConstitution,
  deleteConstitution
}


