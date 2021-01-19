import { User } from "./user";

export class Follow {

    public id:number;
    public user:User;
    public pokemonId:number;

    constructor(id:number, user:User, pokemonId:number){
        this.id = id;
        this.user = user;
        this.pokemonId = pokemonId;
    }
}