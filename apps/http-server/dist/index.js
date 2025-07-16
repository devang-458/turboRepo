"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@repo/db/client");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello sir");
});
app.post("/signup", async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    const response = await client_1.prisma.user.create({
        data: {
            name: name,
            password: password,
        },
    });
    res.json(response.name).status(200);
});
app.listen(3002, () => {
    console.log("server is running");
});
