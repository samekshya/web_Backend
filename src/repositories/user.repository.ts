import { id } from "zod/v4/locales";
import { UserModel, IUser} from "../models/user.model";

export interface IUUserRepository {
    createUser(userData: Partial<IUser>): Promise<any>;
    getUserByEmail(email: string): Promise<IUser | null>;
    getUserById(userId: string): Promise<IUser | null>;

    //Aditional
    getUserById(Id: string): Promise<IUser | null>;
    getAllUsers(): Promise<IUser[]>;
    updateUser(userId: string, updateData: Partial<IUser>): Promise<IUser | null>;
    deleteUser(userId: string): Promise<boolean>;
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
    // async getUserById(id: string): Promise<IUser | null> {
    //     const user = await UserModel.findById(id);
    //     return user;
    // }

    async getUserById(id: string): Promise<IUser | null> {
    //UserModel.findOne({"_id":id})
        const user = await UserModel.findById(id);
        return user;
    }
    async getAllUsers(): Promise<IUser[]> {
        const users = await UserModel.find();
        return users;
    }
    async updateUser(id: string, updateData: Partial<IUser>): Promise<IUser | null> {
        //UserModel.updateOne({_id: id}, {$set: udateData})
        const updatedUser = await UserModel.findByIdAndUpdate(
            id, updateData, { new: true } //return updated document
        );
        return updatedUser;
    }
    async deleteUser(id:string):Promise<boolean>{
        //USerModel.deleteOne({_id: id});
        const result = await UserModel.findByIdAndDelete(id);
        return result ? true : false;
    }
}