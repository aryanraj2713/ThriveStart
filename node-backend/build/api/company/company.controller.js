"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_invested_companies = exports.invest_in_company = exports.get_uninvested_companies = void 0;
const compnay_service_1 = require("./compnay.service");
const get_uninvested_companies = async (request, response) => {
    try {
        const data = await (0, compnay_service_1.get_uninvested_companies_by_investor)();
        response.status(200).send(data);
    }
    catch (error) {
        response.status(500).send({ message: error.message });
    }
};
exports.get_uninvested_companies = get_uninvested_companies;
const invest_in_company = async (request, response) => {
    try {
        const { email } = request.params;
        await (0, compnay_service_1.invest_in_company_by_investor)(email);
        response.status(200).send({ message: 'Invested in company' });
    }
    catch (error) {
        response.status(500).send({ message: error.message });
    }
};
exports.invest_in_company = invest_in_company;
const get_invested_companies = async (request, response) => {
    try {
        const data = await (0, compnay_service_1.handle_get_invested_companies)();
        response.status(200).send(data);
    }
    catch (error) {
        response.status(500).send({ message: error.message });
    }
};
exports.get_invested_companies = get_invested_companies;
//# sourceMappingURL=company.controller.js.map