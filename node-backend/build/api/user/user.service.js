"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_user = exports.update = void 0;
const database_1 = __importDefault(require("../../loaders/database"));
const update = async (email, data) => {
    const user_collection = await (await (0, database_1.default)()).collection("users");
    const user = await user_collection.findOne({ email: email });
    if (!user) {
        throw new Error("User not found");
    }
    await user_collection.updateOne({ email: email }, { $set: data });
};
exports.update = update;
const get_user = async (email) => {
    const user_collection = await (await (0, database_1.default)()).collection("users");
    const user = await user_collection.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }
    return user;
};
exports.get_user = get_user;
//# sourceMappingURL=user.service.js.map