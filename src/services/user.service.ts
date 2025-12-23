import { CreateUserDTO } from "../dtos/user.dto";
import { UserRepository } from "../repositories/user.repository";
import bcryptjs from "bcryptjs";
import { HttpError} from "../errors/http-error";

let userRepository = new UserRepository();



export class UserService {
    async createUser(data: CreateUserDTO){
        //business logic before creating USer
        const emailCheck = await userRepository.getUserByEmail(data.email);
        if(emailCheck){
            throw new HttpError(403, "Email already exists");
        }
        const usernameCheck = await userRepository.getUserByEmail(data.username);
        if(usernameCheck){
            throw new HttpError(403, "Username already exists");
        }
        //hash Password
        const hashedPassword = await bcryptjs.hash(data.password, 10); //10 - complexity
        data.password = hashedPassword;
        //Create user
        const newUser = await userRepository.createUser(data);
        return newUser;
    }
}