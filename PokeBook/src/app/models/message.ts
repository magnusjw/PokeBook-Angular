import { analyzeFileForInjectables } from "@angular/compiler";
import { ContentChild } from "@angular/core";

export class Message {

    public id:number;
    public pokemonId:number;
    public authorId:number;
    public content:string;
    public timestamp:Date; // Questionable datatype

    constructor(id:number, pokemonId:number, authorId:number, content:string, timestamp:Date) {
        this.id = id;
        this.pokemonId = pokemonId;
        this.authorId = authorId;
        this.content = content;
        this.timestamp = timestamp;
    }
}