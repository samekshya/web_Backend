import { UserModel, IUser} from "../models/user.model";

export interface IUUserRepository {
    createUser(userData: Partial<IUser>): Promise<any>;
    getUserByEmail(email: string): Promise<IUser | null>;
    getUserById(userId: string): Promise<IUser | null>;
}
//MongoDb implementatioon of USerRepository

export class UserRepository implements IUUserRepository {
    async createUser(userData: Partial<IUser>): Promise<any> {
        const user = new UserModel(userData);
        return {}; //placeholder
    }
    async getUserByEmail(email: string): Promise<IUser | null> {
        const user = await UserModel.findOne({"email": email})
        return user;
    }
    async getUserById(userId: string): Promise<IUser | null> {
        const user = await UserModel.findById(userId);
        return user;
    }
}