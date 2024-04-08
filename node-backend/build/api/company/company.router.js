"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const company_controller_1 = require("./company.controller");
exports.default = () => {
    const app = (0, express_1.Router)();
    //TODO: add routes here...
    app.get('/uninvested', company_controller_1.get_uninvested_companies);
    app.get('/invested', company_controller_1.get_invested_companies);
    app.put('/:email', company_controller_1.invest_in_company);
    app.post('/update/:email', company_controller_1.update_company);
    app.get('/:email', company_controller_1.get_company);
    return app;
};
//# sourceMappingURL=company.router.js.map