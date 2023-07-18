import {Educator} from "./Educator";

export class Institution {
    id:string;
    maxKids:number;
    listEducators:Educator[];
    name:string;

    constructor(maxKids: number,listEducators:Educator[],id:string,name:string) {
        this.maxKids = maxKids;
        this.listEducators=listEducators;
        this.id=id;
        this.name=name;
    }
}
