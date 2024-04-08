"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
exports.default = () => {
    const app = (0, express_1.Router)();
    //TODO: add routes here...
    app.put('/:email', user_controller_1.update_handle);
    return app;
};
//# sourceMappingURL=user.router.js.map