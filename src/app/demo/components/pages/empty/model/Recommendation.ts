import {Exercice} from "./Exercice";
import {Category} from "./Category";
import {Segment} from "./Segment";

export class Recommendation {

    activity:string;
    listExercices:Exercice[];
    category:Category;
    segment:Segment;
    constructor(activity: string,listExercices:Exercice[],category:Category,segment:Segment) {
        this.activity = activity;
        this.listExercices=listExercices;
        this.category=category;
        this.segment=segment;
    }
}
