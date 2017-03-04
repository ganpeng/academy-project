import leader from './leader';


export default (app) => {

  app.use('/leader', leader);
}
