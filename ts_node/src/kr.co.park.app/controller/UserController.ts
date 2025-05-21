import { Request, Response } from 'express';

export class UserController {
  sayHello(req: Request, res: Response) {
    res.send("Hello from UserController");
  }

  createUser(req: Request, res: Response) {
    const { name } = req.body;
    res.json({ message: `User ${name} created.` });
  }
}
