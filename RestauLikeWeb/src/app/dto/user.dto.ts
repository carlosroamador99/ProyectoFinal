export class UserDto{
    email: string;
    password: string;
    name: string;
    role: string;
    picture: string;

    constructor(email: string, pass: string, name: string, role: string, picture: string){
        this.email = email;
        this.password = pass;
        this.name = name;
        this.role = role;
        this.picture = picture;
    }
}