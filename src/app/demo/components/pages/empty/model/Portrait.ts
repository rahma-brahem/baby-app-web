import {Recommendation} from "./Recommendation";

export class Portrait {
    date:Date;
    observations:string;
    weight:number;
    height:number;
    recommendation:Recommendation[]=[];

    constructor(date: Date, observations: string, weight: number, height: number) {
        this.date = date;
        this.observations = observations;
        this.weight = weight;
        this.height = height;
    }
}
