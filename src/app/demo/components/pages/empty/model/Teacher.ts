import {EnrolledKid} from "./EnrolledKid";

export class Teacher {

    id:string;
    name:string;
    mdp:string;
    kids:EnrolledKid[];
    constructor(id: string, name: string, mdp: string, kids: EnrolledKid[]) {
        this.id = id;
        this.name = name;
        this.mdp = mdp;
        this.kids = kids;
    }

}
