import co from 'co';

import Leader from '../models/leader';


export function getLeaders(req, res) {
  co(function*() {
    const leaders = yield Leader.find({}).exec();
    return res.json({
      success: 'ok',
      result: {
        leaders
      }
    });
  }).catch((err) => {
    console.log(err);
  })
}


export function getLeader(req, res) {
  co(function*() {
    const { id } = req.params;
    const leader = yield Leader.findById(id).exec();
    return res.json({
      success: 'ok',
      result: {
        leader
      }
    });

  }).catch((err) => {
    console.log(err);
  })
}

export function addLeader(req, res) {
  co(function* () {
    const leader = req.body;

    if (yield Leader.create(leader)) {
      return res.json({
        success: 'ok'
      })
    }

  }).catch((err) => {
    console.log(err);
  })
}


export function updateLeader(req, res) {
  co(function*() {
    const { id } = req.params;
    const update = req.body;

    const leader = yield Leader.findByIdAndUpdate(id, update).exec();

    return res.json({
      success: 'ok',
      result: {
        leader
      }
    })

  }).catch((err) => {
    console.log(err);
  })
}

export function deleteLeader(req, res) {
  co(function*() {
    const { id } = req.params;
    yield Leader.findByIdAndRemove(id).exec();

    return res.json({
      success: 'ok'
    })

  }).catch((err) => {
    console.log(err);
  })
}


export default {
  getLeader,
  getLeaders,
  addLeader,
  updateLeader,
  deleteLeader
}


