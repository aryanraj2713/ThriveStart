import { Request, Response } from "express";
import database from "../../loaders/database";
import { get_uninvested_companies_by_investor, handle_get_invested_companies, invest_in_company_by_investor } from "./compnay.service";

export const get_uninvested_companies = async (
    request: Request,
    response: Response,
) => {
    try {
        const data = await get_uninvested_companies_by_investor();
        response.status(200).send(data);
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
}

export const invest_in_company = async (
    request: Request,
    response: Response,
) => {
    try {
        const { email } = request.params;
        await invest_in_company_by_investor(email);
        response.status(200).send({ message: 'Invested in company' });
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
}

export const get_invested_companies = async (
    request: Request,
    response: Response,
) => {
    try {
        const data = await handle_get_invested_companies();
        response.status(200).send(data);
    } catch (error) {
        response.status(500).send({ message: error.message });
    }
}