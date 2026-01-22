import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { date } from 'zod/v4/mini/coerce.cjs';
import { connectDatabase }  from './database/mongodb';  
import { PORT } from './config';
import { cors } from 'cors';
import path from 'path';

import dotenv from "dotenv";
dotenv.config();
//can use .env variables below this
console.log(process.env.PORT);

import authRoutes from './routes/auth.routes';
import bookRoutes from './routes/books.routes';
import authUserRoutes from './routes/admin/user.route';


const app: Application = express();

app.use('uploads', express.static(path.join(__dirname, '..', 'uploads')));

let corsOptions = {
    origin: ['http://localhost:3000', "http://localhost:3005"], 
    //which domain can access your backend server
    //add frontend domain in origin 
    // Allow requests from this origin
}
//prigin : "*", //allow all domain to access your backend server
app.use(cors(corsOptions));
// const PORT: number = 3000;

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

app.use('/api/books', bookRoutes);
app.use('/api/admin/users', authUserRoutes);

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

