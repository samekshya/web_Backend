import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { date } from 'zod/v4/mini/coerce.cjs';
import { connectDatabase }  from './database/mongodb';  
import { PORT } from './config';

import dotenv from "dotenv";
dotenv.config();
//can use .env variables below this
console.log(process.env.PORT);

import authRoutes from './routes/auth.routes';
import bookRoutes from './routes/books.routes';


const app: Application = express();
// const PORT: number = 3000;

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

app.get('/', (req: Request, res:Response) => {
    res.send('Hello, TypeScript with Express!');
}); 

// app.get('/api/books/',(req: Request, res: Response) => {
//     const books = [
//         {id: "B-1", title: "1984"},
//         {id: "B-2", title: "To Kill a Mockingbird", date: date("2015-12-10")}
//     ];
//     res.json(books);

// });

async function startServer(){
    await connectDatabase();

    app.listen(
        PORT,
        () => {
            console.log(`Server : http://localhost:${PORT}`);
  }
  );
}
startServer();

