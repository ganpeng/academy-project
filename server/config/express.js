import express from 'express';
import path from 'path';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

export default (app) => {

  app.use(express.static(path.join(__dirname, '../upload')));
  app.use(cors());
  app.use(compression());
  // app.use(multer());
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

}
