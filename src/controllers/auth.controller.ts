import { UserRepository } from "../repositories/user.repository";
import { CreateUserDTO, LoginUserDTO } from "../dtos/user.dto";
import {Request, Response } from "express";
import z from "zod";
import { UserService } from "../services/user.service";

const userService = new UserService();

export class AuthController {
    async register(req: Request, res: Response) {
        try{
            //validate requets body
            const parsedData = CreateUserDTO.safeParse(req.body); //validate request bodyz
            if(!parsedData.success){
                return res.status(400).json( 
                    { success: false, message: z.prettifyError(parsedData.error)}
                )
            }
            const userData: CreateUserDTO = parsedData.data;
            const newUser = await userService.createUser(parsedData.data);
            return res.status(201).json(
                {success: true, data: newUser}
            );
        }catch(error: Error | any){ // exception handling
            return res.status(error.statusCode || 500).json(
                {success: false, message: error.message || 'Internal Server Error'}
            );
        }
    }

    async login(req: Request, res: Response ) {
        try{
            const parsedData = LoginUserDTO.safeParse(req.body);
            if(!parsedData.success){
                return res.status(400).json(
                    {success: false, message: z.prettifyError(parsedData.error)}
                );
            }
            const loginData: LoginUserDTO = parsedData.data;
            const loginResponse = await userService.loginUser(loginData);
            return res.status(200).json(
                {success: true, message: "Login successful", data: loginResponse.user, token: loginResponse.token}
            );

        }catch (error: Error | any){
            return res.status(error.statusCode || 500).json(
                {success: false, message: error.message || 'Internal Server Error'}
            );
        }
    }
}
