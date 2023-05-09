import {
  addPractitioner,
  deletePractitioner,
  getPractitioner,
  getPractitionerDetail,
  updatePractitioner,
} from '../controllers/practitioner';

export default (app) => {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
    next();
  });

  app.get('/practitioners', getPractitioner);

  app.get('/practitioners/:id', getPractitionerDetail);

  app.post('/practitioners', addPractitioner);

  app.put('/practitioners/:id', updatePractitioner);

  app.delete('/practitioners/:id', deletePractitioner);
};
