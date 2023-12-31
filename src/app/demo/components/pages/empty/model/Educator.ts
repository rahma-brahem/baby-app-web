import {Institution} from "./Institution";
import {Kid} from "./Kid";
import {Portrait} from "./Portrait";
import {User} from "./User";


export class Educator {
    id:string;
    firstName:string;
    lastName:string;
    maxKids:number;
    email:string;
    phone:number;
    user?:User;
    listKids:Kid[];



    constructor(id: string, firstName: string, lastName: string, maxKidsPerEducator: number, email: string, phone: number,kids:Kid[]) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.maxKids = maxKidsPerEducator;
        this.email = email;
        //this.user=user;
        this.phone = phone;
        this.listKids=kids;

    }
}
