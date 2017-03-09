import co from 'co';
import jwt from 'jsonwebtoken';
import pick from 'lodash/pick';

import User from '../models/user';

import config from '../config/';

export function signup(req, res) {
  co(function*() {
    const { username, password } = req.body;
    const existUser = yield User.findOne({username}).exec();

    if (existUser) {
      return res.json({
        success: 'no',
        message: '该用名已经存在'
      })
    } else {
      const user = yield User.create({username, password});

      const token = jwt.sign({ data: pick(user, ['_id', 'username'])}, config.mySecret);

      if (user) {
        return res.json({
          success: 'ok',
          token
        })
      }
    }
  }).catch((err) => {
    console.log(err)
  })

}



export function login(req, res) {
  co(function*() {
    const {  username, password } = req.body;
    const user = yield User.findOne({username}).exec();

    if (user) {
      if (user.password === password) {
        const token = jwt.sign({ data: pick(user, ['_id', 'username'])}, config.mySecret);
        return res.json({
          success: 'ok',
          token
        })
      } else {
        return res.json({
          success: 'no',
          message: '用户密码不正确'
        })
      }
    } else {
      return res.json({
        success: 'no',
        message: '该用户不存在'
      })
    }
  }).catch((err) => {
    console.log(err);
  })
}


export default {
  signup,
  login
}



