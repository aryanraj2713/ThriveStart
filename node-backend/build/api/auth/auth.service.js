"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = void 0;
const database_1 = __importDefault(require("../../loaders/database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const utils_1 = __importDefault(require("../../utils"));
const signup = async (email, password, phone, name, is_investor) => {
    const user_collection = await (await (0, database_1.default)()).collection('users');
    const saltRounds = 10;
    const hash = await bcrypt_1.default.hash(password, saltRounds);
    await user_collection.insertOne({ email, password: hash, phone, name, is_investor });
};
exports.signup = signup;
const login = async (email, password) => {
    const user_collection = await (await (0, database_1.default)()).collection('users');
    const user = await user_collection.findOne({ email });
    if (!user) {
        throw new Error('User not found');
    }
    const match = await bcrypt_1.default.compare(password, user.password);
    if (!match) {
        throw new Error('User not found');
    }
    return {
        token: (0, utils_1.default)(email),
        user: user
    };
};
exports.login = login;
//# sourceMappingURL=auth.service.js.map