import leader from './leader';
import expert from './expert';


export default (app) => {

  app.use('/leader', leader);
  app.use('/expert', expert);

}
