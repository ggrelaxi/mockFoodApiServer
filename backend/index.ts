import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const port = process.env.PORT ?? 9002;

app.get('/', (req: Request, res: Response) => {
	res.send('Express server started');
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
