import database from "../../loaders/database";

export const get_uninvested_companies_by_investor = async (
) => {
    const company_collection = await (await database()).collection('companies');
    return await company_collection.find({ invested: false }).toArray();
}

export const invest_in_company_by_investor = async (
    email: string
) => {
    const company_collection = await (await database()).collection('companies');
    await company_collection.updateOne({ email }, { $set: { invested: true } });
}

export const handle_get_invested_companies = async () => {
    const company_collection = await (await database()).collection('companies');
    const data = await company_collection.find({ invested: true }).toArray();
    return data;
}