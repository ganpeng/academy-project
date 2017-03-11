import path from 'path';
import multer from 'multer';
import { v4 } from 'uuid';

import leader from './leader';
import expert from './expert';
import constitution from './constitution';
import auth from './auth';
import carousel from './carousel';


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../upload'));
  },

  filename: (req, file, cb) => {
    const filename = v4();
    const ext = path.extname(file.originalname);
    cb(null, `${filename}-${Date.now()}${ext}`);
  }
})
const upload = multer({storage});

export default (app) => {

  app.use('/auth', auth);
  app.use('/leader', leader);
  app.use('/expert', expert);
  app.use('/constitution', constitution);
  app.use('/carousel', carousel);
  app.use('/imageupload', upload.single('file'), (req, res, next) => {
    return res.send({success: 'ok', image: req.file.filename});
  })

}
