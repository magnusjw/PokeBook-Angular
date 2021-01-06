import { Message } from "./message";
import { User } from "./user";

export class Like {

    public id:number;
    public user:User;
    public message:Message;

    constructor(id:number, user:User, message:Message){
        this.id = id;
        this.user = user;
        this.message = message;
    }
}


