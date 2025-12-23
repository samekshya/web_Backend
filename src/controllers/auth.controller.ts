import { UserRepository } from "../repositories/user.repository";
import { CreateUserDTO } from "../dtos/user.dto";
import {Request, Response } from "express";
import z from "zod";
import { UserService } from "../services/user.service";

let userService = new UserService

export class AuthController {
    async register(req: Request, res: Response) {
        try{
            //validate requets body
            const parsedData = CreateUserDTO.safeParse(req.body); //validate request bodyz
            if(!parsedData.success){
                return res.status(400).json( 
                    { sucess: false, message: z.prettifyError(parsedData.error)}
                )
            }
            const userData: CreateUserDTO = parsedData.data;
            const newUser = await userService.createUser(parsedData.data);
            return res.status(201).json(
                {sucess: true, data: newUser}
            );
        }catch(error: Error | any){ // exception handling
            return res.status(error.statusCode || 500).json(
                {sucess: false, message: error.message || 'Internal Server Error'}
            );
        }
    }
}
