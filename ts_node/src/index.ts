import express, { Request, Response} from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello world!');
});

app.post('/api', (req: Request, res: Response) => {
    const { name } = req.body;
    res.send(`Hello, ${name}!`);
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const sayHello = (name: string): string => {
    return `Hello, ${name}!`;
};

console.log(sayHello("천재님"));
