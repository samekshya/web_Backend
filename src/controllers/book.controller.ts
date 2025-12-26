// import { Request, Response } from 'express';
// import {z} from 'zod';
// import { Book } from '../types/book.type ';
// import { BookService } from '../services/book.service'; 
// import{CreateBookDTO} from '../dtos/book.dto';

// const bookService = new BookService();

// export const BookSchema = z.object({
//     id: z.string().min(1, "Book id is required"),
//     title: z.string().min(1, "Book title is required"),
//     date: z.string().optional()
// });
// export type Book = z.infer<typeof BookSchema>; //TypeScript type from ZOd schema

// //DTO= Data Transfer Object
// export const CreateBookDTO = BookSchema.pick({id:true, title:true}); //what client sends to server
// export type CreateBookDTO = z.infer<typeof CreateBookDTO>; 


// // export type Book = {
// //     id: string;
// //     title: string;
// //     date?: string;
// // }


// export const books: Book[] = [
//     {id: "B-1", title: "1984"},
//     {id: "B-2", title: "To Kill a Mockingbird", date: "2015-12-10"}
   
// ];

// export class BookController {
//     createBook = (req: Request, res: Response) => {
//         try{
//             const validation = CreateBookDTO.safeParse(req.body);
//             if(!validation.success){
//                 return res.status(400).json({errors: validation.error});
//             }
//             const { id, title} = validation.data;
//             const newBook: Book = bookService.createBook{id, title};

//             return res.status(201).json(newBook);
            
//         }catch(err: Error | any){
//             return res.status(500).json({message: err.message?? 'Internal Server Error'});
//         }



//         const validation = CreateBookDTO.safeParse(req.body);
//         if(!validation.success){
//             return res.status(400).json({errors: validation.error});
//         }
//         const {id, title} = validation.data;

//         // // const { id, title } = req.body; //destructuring
//         // // const id: string = req.body.id;
//         // // if(!id){
//         // //     return res.status(400).json({message: "Book id is required"});
//         // // }
//         // // if(!title){
//         // //     return res.status(400).json({message: "Book title is required"});
//         // // }


//         // const checkBook = books.find(elem =>elem.id === id);
//         // if(checkBook){
//         //     return res.status(409).json({message: "Book with this id already exists"});
//         // }
//         // const newBook: Book = {id, title};
//         // //same as {id: id, title:title }, if key and variable name are same
//         // books.push(newBook);
//         // return res.status(201).json(newBook);

//     }


//     getBooks = (req: Request, res: Response) => {
//         const return_book: Book[] = bookService.getBooks();
//         res.status(200).json(return_book)
//         }
    
// }; 