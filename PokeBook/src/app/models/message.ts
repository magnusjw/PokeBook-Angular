export class Message {

    constructor(
        public id:number,
        public pokemonId:number,
        public authorId:number,
        public content:string,
        public timestamp:Date, // Questionable datatype
        public likes:number
    ) { }
}