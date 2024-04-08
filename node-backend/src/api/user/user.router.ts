import { Router } from 'express';
import { update_handle } from './user.controller';

export default (): Router => {
    const app = Router();

    //TODO: add routes here...
    app.put('/:email', update_handle);
    return app;
};
