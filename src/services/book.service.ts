import { title } from "process";
import { BookRepository, IBookRepository } from "../repositories/book.repository";
import { Book } from "../controllers/book.controller";
let bookRepository: IBookRepository = new BookRepository();
export class BookService {
    getBooks = () : Book[]  => {
        //business login/ transformation
        let transformedBooks= 
        bookRepository
            .getAllBooks()
            .map(bk => {
                return {
                    ...bk,
                    title: bk.title.toUpperCase()
                }    
            })
        return transformedBooks;    
         
    }
    createBook = (newBook: CreateBookDTO): Book => {
        //business logic/ transformation
        const newBook: Book = { ...bookData };
        //same as {id: bookData.id, title:bookData.title }
        let existingBook = bookRepository.getBookById(newBook.id);
        if(existingBook){
            throw new Error("Book with this id already exists");
        }
        return bookRepository.createBook(newBook);
    }    
}    