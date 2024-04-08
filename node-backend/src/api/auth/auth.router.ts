import { Router } from 'express';
import { handle_login, handle_signup } from './auth.controller';

export default (): Router => {
    const app = Router();

    //TODO: add routes here...
    app.post('/signup', handle_signup);
    app.post('/login', handle_login);

    return app;
};
