
import { User } from "./user";

export class Message {

    public id:number;
    public pokemonId:number;
    public author:User;
    public content:string;
    public timeStamp:Date; // Questionable datatype

    constructor(id:number, pokemonId:number, author:User, content:string, timeStamp:Date) {
        this.id = id;
        this.pokemonId = pokemonId;
        this.author = author;
        this.content = content;
        this.timeStamp = timeStamp;
    }
}