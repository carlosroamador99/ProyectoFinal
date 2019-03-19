import { UserDto } from "../dto/user.dto";
import { UserResponse } from "./user-response.interface";

export interface LoginResponse{
    token: string;
    name: string;
    email: string;
    role: string;
    user: UserResponse;
}