"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 9002;
app.get('/', (req, res) => {
    res.send('Express server started');
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
