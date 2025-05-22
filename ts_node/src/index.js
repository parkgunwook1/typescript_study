"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello world!');
});
app.post('/api', (req, res) => {
    const { name } = req.body;
    res.send(`Hello, ${name}!`);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
const sayHello = (name) => {
    return `Hello, ${name}!`;
};
console.log(sayHello("천재님"));
