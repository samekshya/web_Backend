import { UserRepository } from "../../repositories/user.repository";
import { CreateUserDTO } from "../../dtos/user.dto";
import bcryptjs from "bcryptjs";
import { HttpError} from "../../errors/http-error";
import { id } from "zod/v4/locales";
 
let userRepository = new UserRepository();

export class AdminUserService {
    async createUser(data: CreateUserDTO){
        // same as src/services/user.service.ts
    }
    async getAllUsers(){
        const users = await userRepository.getAllUsers();
        //transformation or filtering logic can be added here
        return users;
    }
    async getOneUser(id: string){
        const user = await userRepository.getUserById(id);
        if(!user){
            throw new HttpError(404, "User not found");
        }
        return user;
    }
    //continue all
}