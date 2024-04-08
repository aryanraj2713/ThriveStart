import { Router } from 'express';
import authRouter from './auth/auth.router';
import userRouter from './user/user.router';
import companyRouter from './company/company.router';

export default (): Router => {
  const app = Router();

  //TODO: add routes here...
  app.use('/auth', authRouter());
  app.use('/user', userRouter());
  app.use('/company', companyRouter());

  return app;
};
