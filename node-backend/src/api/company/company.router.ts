import { Router } from 'express';
import { get_invested_companies, get_uninvested_companies, invest_in_company, update_company } from './company.controller';

export default (): Router => {
    const app = Router();

    //TODO: add routes here...
    app.get('/uninvested', get_uninvested_companies);
    app.get('/invested', get_invested_companies);
    app.put('/:email', invest_in_company);
    app.post('/update/:email', update_company);
    return app;
};
