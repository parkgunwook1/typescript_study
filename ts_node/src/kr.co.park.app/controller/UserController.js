"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    sayHello(req, res) {
        res.send("Hello from UserController");
    }
    createUser(req, res) {
        const { name } = req.body;
        res.json({ message: `User ${name} created.` });
    }
}
exports.UserController = UserController;
