import { Router } from 'express';
import { handle_get_user, update_handle } from './user.controller';

export default (): Router => {
    const app = Router();

    //TODO: add routes here...
    app.put('/:email', update_handle);
    app.get('/:email', handle_get_user);
    return app;
};
