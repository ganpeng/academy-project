import express from 'express';
import mongoose from 'mongoose';
import Promise from 'bluebird';

mongoose.Promise = Promise;

import config from './config/';
import expressConfig from './config/express';
import routes from './routes';

const app = express();

expressConfig(app);
routes(app);


connect()
  .on('error', console.log)
  .on('open', listen)
  .on('disconnected', connect)



function connect() {
  return mongoose.connect(config.db).connection;
}


function listen() {
  app.listen(3001, () => {
    console.log('server started on port 3000');
  })
}

