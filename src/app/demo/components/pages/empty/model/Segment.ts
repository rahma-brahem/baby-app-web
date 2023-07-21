import {Gender} from "./Gender";
import {Recommendation} from "./Recommendation";

export class Segment {
    from:number;
    to:number;
    gender:Gender;
    //listRecommendations:Recommendation[];
    constructor(from: number, to: number, gender: Gender) {
        this.from = from;
        this.to = to;
        this.gender = gender;
        //this.listRecommendations=listRecommendation;

    }
}
