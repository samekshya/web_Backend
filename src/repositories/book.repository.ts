import { Book } from '../types/book.type';   

export const books: Book[] = [
    {id: "B-1", title: "1984"},
    {id: "B-2", title: "To Kill a Mockingbird", date: "2015-12-10"}
   
];

export interface IBookRepository {
    getAllBooks(): Book[];
    getBookById(id: string): Book | undefined;
    createBook(newBook: Book): Book;
}

export class BookRepository implements IBookRepository {
    getAllBooks(): Book[] {
        return books;
    }
    getBookById(id: string): Book | undefined {
        return books.find(bk => bk.id === id);
    }
    createBook(newBook: Book): Book {
        books.push(newBook);
        return newBook;
    }
}  