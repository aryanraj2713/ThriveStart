import database from "../../loaders/database";
import bcrypt from 'bcrypt';
import generateToken from "../../utils";

export const signup = async (email: string, password: string, name: string, is_investor: boolean) => {
    if (is_investor) {
        const user_collection = await (await database()).collection('users');
        const saltRounds = 10;
        const hash = await bcrypt.hash(password, saltRounds);
        await user_collection.insertOne({ email, password: hash, name, is_investor });
    }
    else {
        const company_collection = await (await database()).collection('companies');
        const saltRounds = 10;
        const hash = await bcrypt.hash(password, saltRounds);
        await company_collection.insertOne({
            email, password: hash, name, is_investor, invested: false
        });
    }
};

export const login = async (email: string, password: string) => {
    const user_collection = await (await database()).collection('users');
    const user = await user_collection.findOne({ email });
    if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            throw new Error('User not found');
        }
        return {
            token: generateToken(email),
            user: user
        }
    }
    else {
        const company_collection = await (await database()).collection('companies');
        const company = await company_collection.findOne({ email });
        if (!company) {
            throw new Error('Company not found');
        }
        const match = await bcrypt.compare(password, company.password);
        if (!match) {
            throw new Error('Company not found');
        }
        return {
            token: generateToken(email),
            user: company
        }
    }
}
