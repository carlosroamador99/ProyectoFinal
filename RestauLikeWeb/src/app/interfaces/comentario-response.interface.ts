import { UserResponse } from "./user-response.interface";

export interface ComentarioResponse{
    id: string;
    valoracion: string;
    comentario: string;
    user: UserResponse;
}