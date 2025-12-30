import z from 'zod';
import { USerSchema } from '../types/user.type';    

export const CreateUserDTO = USerSchema.pick(
    {
        firstName: true,
        lastName: true,
        email: true,
        username: true,
        password: true
    }
).extend( //add new attribute tpo zod
    {
        confirmPassword: z.string().min(6)
    }
).refine( // extra vlaidation for confirmPassoword
    (data) => data.password ===data.confirmPassword,
    {
        message: "Passowrds donot match",
        path:["confirmPassword"]
    }
)
export type CreateUserDTO = z.infer<typeof CreateUserDTO>;

export const LoginUserDTO = z.object({
    email: z.email(),
    password: z.string().min(6)
});
export type LoginUserDTO = z.infer<typeof LoginUserDTO>;