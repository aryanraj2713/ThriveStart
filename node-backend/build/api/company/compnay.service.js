"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handle_get_company = exports.handle_update_company = exports.handle_get_invested_companies = exports.invest_in_company_by_investor = exports.get_uninvested_companies_by_investor = void 0;
const database_1 = __importDefault(require("../../loaders/database"));
const get_uninvested_companies_by_investor = async () => {
    const company_collection = await (await (0, database_1.default)()).collection('companies');
    return await company_collection.find({ invested: false }).toArray();
};
exports.get_uninvested_companies_by_investor = get_uninvested_companies_by_investor;
const invest_in_company_by_investor = async (email) => {
    const company_collection = await (await (0, database_1.default)()).collection('companies');
    await company_collection.updateOne({ email }, { $set: { invested: true } });
};
exports.invest_in_company_by_investor = invest_in_company_by_investor;
const handle_get_invested_companies = async () => {
    const company_collection = await (await (0, database_1.default)()).collection('companies');
    const data = await company_collection.find({ invested: true }).toArray();
    return data;
};
exports.handle_get_invested_companies = handle_get_invested_companies;
const handle_update_company = async (data) => {
    const company_collection = await (await (0, database_1.default)()).collection('companies');
    const company = await company_collection.findOne({ email: data.email });
    if (!company) {
        throw new Error('Company not found');
    }
    await company_collection.updateOne({ email: data.email }, { $set: data });
};
exports.handle_update_company = handle_update_company;
const handle_get_company = async (email) => {
    const company_collection = await (await (0, database_1.default)()).collection('companies');
    const company = await company_collection.findOne({ email });
    if (!company) {
        throw new Error('Company not found');
    }
    return company;
};
exports.handle_get_company = handle_get_company;
//# sourceMappingURL=compnay.service.js.map