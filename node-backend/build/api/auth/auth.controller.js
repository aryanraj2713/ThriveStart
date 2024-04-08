"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handle_login = exports.handle_signup = void 0;
const auth_service_1 = require("./auth.service");
const handle_signup = async (req, res) => {
    const { email, password, phone, name, is_investor } = req.body;
    try {
        await (0, auth_service_1.signup)(email, password, phone, name, is_investor);
        return res.status(201).json({ message: 'User created successfully' });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
exports.handle_signup = handle_signup;
const handle_login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await (0, auth_service_1.login)(email, password);
        return res.status(200).json({ token });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
exports.handle_login = handle_login;
//# sourceMappingURL=auth.controller.js.map