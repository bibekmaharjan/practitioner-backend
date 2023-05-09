import { signup, signin } from '../controllers/auth';
import verifySignUp from '../middleware/verifySignup';

export default (app) => {
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*', 'x-access-token, Origin, Content-Type, Accept');
    next();
  });

  app.post('/auth/signup', [verifySignUp.checkDuplicateEmail], signup);

  app.post('/auth/signin', signin);
};
