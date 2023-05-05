import { addPractitioner, deletePractitioner, getPractitioner, updatePractitioner } from '../controllers/practitioner';
import verifyJwtToken from '../middleware/verifyJwtToken';

export default (app) => {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept');
    next();
  });

  app.get('/practitioners', verifyJwtToken, getPractitioner);

  app.post('/practitioners', verifyJwtToken, addPractitioner);

  app.put('/practitioners/:id', verifyJwtToken, updatePractitioner);

  app.delete('/practitioners/:id', verifyJwtToken, deletePractitioner);
};
