import {Recommendation} from "./Recommendation";
import {Educator} from "./Educator";

export class Portrait {
    date:Date;
    observations:string;
    weight:number;
    height:number;
    recommendation:Recommendation[];
    educator?:Educator;
    constructor(date: Date, observations: string, weight: number, height: number, recommendation:Recommendation[]) {
        this.date = date;
        this.observations = observations;
        this.weight = weight;
        this.height = height;
        this.recommendation=recommendation;
        //this.educator=educator;
    }
}
