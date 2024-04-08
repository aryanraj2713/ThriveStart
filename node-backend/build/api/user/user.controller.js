"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handle_get_user = exports.update_handle = void 0;
const user_service_1 = require("./user.service");
const update_handle = async (req, res) => {
    try {
        const { email } = req.params;
        const data = req.body;
        await (0, user_service_1.update)(email, data);
        res.status(200).json({ message: "User updated successfully" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.update_handle = update_handle;
const handle_get_user = async (request, response) => {
    try {
        const { email } = request.params;
        const data = await (0, user_service_1.get_user)(email);
        response.status(200).json({ data });
    }
    catch (error) {
        response.status(400).json({ message: error.message });
    }
};
exports.handle_get_user = handle_get_user;
//# sourceMappingURL=user.controller.js.map