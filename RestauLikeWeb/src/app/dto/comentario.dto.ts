import { UserDto } from "./user.dto";

export class ComentarioDto{
    comentario: string[];
    usuario: UserDto;

    constructor( coment: string[], user: UserDto){
        this.comentario = coment;
        this.usuario = user;
    }

}