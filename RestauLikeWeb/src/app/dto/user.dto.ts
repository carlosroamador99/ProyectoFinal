export class UserDto{
    _id: string;
    email: string;
    password: string;
    name: string;
    role: string;
    picture: string;

    constructor(id: string, email: string, pass: string, name: string, role: string, picture: string){
        this._id = id;
        this.email = email;
        this.password = pass;
        this.name = name;
        this.role = role;
        this.picture = picture;
    }
}