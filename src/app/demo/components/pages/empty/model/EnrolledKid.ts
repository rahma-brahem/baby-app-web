import {Gender} from "./Gender";
import {Portrait} from "./Portrait";

export class EnrolledKid {
    id: string;
    name: string;
    gender: Gender;
    mdp: string;
    parent:string;
    birthDate:Date;
    portraitList:Portrait[];

    constructor(id: string, name: string, gender: Gender, mdp: string,parent:string,birthDate:Date,portraitList:Portrait[]) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.mdp = mdp;
        this.birthDate=birthDate;
        this.parent=parent;
        this.portraitList=portraitList;
    }
}

