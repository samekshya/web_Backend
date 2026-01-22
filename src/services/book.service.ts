import { BookRepository, IBookRepository } from "../repositories/book.repository";

type Book = any;
type CreateBookDTO = any;

let bookRepository: IBookRepository = new BookRepository();

export class BookService {
	getBooks = (): Book[] => {
		return bookRepository.getAllBooks();
	}

	createBook = (newBook: CreateBookDTO): Book => {
		return bookRepository.createBook(newBook as any);
	}
}