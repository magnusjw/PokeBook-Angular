import { timeStamp } from "console";

export class User {

    public id:number;
    public username:string;
    public password:string;
    public firstName:string;
    public lastName:string;
    public email:string;


    constructor(id:number, username:string, password:string, firstName:string, lastName:string, email:string) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}