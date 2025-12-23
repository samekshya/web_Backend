// /  DTO  - Data transfer object 
import{z} from 'zod';
import { BookSchema } from '../types/book.type';

export const CreatedBookDTO = BookSchema.pick({id: true, title: true}); // what clients sends to server
export type CreatedBookDTO = z.infer<typeof CreatedBookDTO>