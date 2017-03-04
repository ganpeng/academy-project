import leader from './leader';
import expert from './expert';
import constitution from './constitution';


export default (app) => {

  app.use('/leader', leader);
  app.use('/expert', expert);
  app.use('/constitution', constitution);

}
