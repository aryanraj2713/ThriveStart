import database from "../../loaders/database";
import bcrypt from 'bcrypt';
import generateToken from "../../utils";

export const signup = async (email: string, password: string, name: string, is_investor: boolean) => {
    const user_collection = await (await database()).collection('users');
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    await user_collection.insertOne({ email, password: hash, name, is_investor });
};

export const login = async (email: string, password: string) => {
    const user_collection = await (await database()).collection('users');
    const user = await user_collection.findOne({ email });
    if (!user) {
        throw new Error('User not found');
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw new Error('User not found');
    }
    return {
        token: generateToken(email),
        user: user
    }
}
