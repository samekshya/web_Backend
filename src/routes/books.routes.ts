import { Router, Request, Response } from 'express';
import{BookController} from '../controllers/book.controller';
import { date } from 'zod/v4/mini/external.cjs';

const bookController = new BookController();
const router: Router = Router();

router.get('/', bookController.getBooks);


export default router;