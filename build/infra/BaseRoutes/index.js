"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import userRoutes from "../../modules/User/routes";
// import authRoutes from "../../modules/Auth/routes";
const routes = (0, express_1.Router)();
routes.get("/", (req, res) => {
    return res.json("Api rodando corretamente");
});
exports.default = routes;
