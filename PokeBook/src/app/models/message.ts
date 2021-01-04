import { analyzeFileForInjectables } from "@angular/compiler";
import { ContentChild } from "@angular/core";

export class Message {

    public id:number;
    public pokemonId:number;
    public authorId:number;
    public content:string;
    public timeStamp:Date; // Questionable datatype

    constructor(id:number, pokemonId:number, authorId:number, content:string, timeStamp:Date) {
        this.id = id;
        this.pokemonId = pokemonId;
        this.authorId = authorId;
        this.content = content;
        this.timeStamp = timeStamp;
    }
}