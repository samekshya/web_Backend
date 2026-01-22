import { Router, Request, Response } from 'express';
import { BookController } from '../controllers/book.controller';

const bookController = new BookController();

const router: Router = Router();

router.get('/', bookController.getBooks);
// make a router that handles GET request that takes bookid
// /:bookid and calls bookController.getBookById
// router.get('/:bookid', bookController.getBookById);

// router.post('/', bookController.createBook);

export default router; 

//import { Router, Request, Response } from 'express';
// import{BookController} from '../controllers/book.controller';
// import { date } from 'zod/v4/mini/external.cjs';

// const bookController = new BookController();
// const router: Router = Router();

// router.get('/', bookController.getBooks);
// //make a router that handles GET request that takes bookid
// // /:bookid and calls bookControlloer.getBookById
// //router.get('/:bookid', bookController.getBookById);

// router.post('/', bookController.createBook);


// export default router;