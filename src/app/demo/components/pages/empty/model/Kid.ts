import {Gender} from "./Gender";
import {Portrait} from "./Portrait";

export class Kid {
    id:string;
    firstName:string;
    lastName:string;
    gender:Gender;
    birthDate:Date;
    listPortraits:Portrait[];

    constructor(id: string, firstName: string, lastName: string, gender: Gender, birthDate: Date,listPortraiu:Portrait[]) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.birthDate = birthDate;
        this.listPortraits=listPortraiu;
    }
}
