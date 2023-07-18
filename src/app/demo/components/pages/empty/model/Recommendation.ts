import {Exercice} from "./Exercice";
import {Category} from "./Category";

export class Recommendation {

    activity:string;
    listExercices:Exercice[];
    category:Category;
    constructor(activity: string,listExercices:Exercice[],category:Category) {
        this.activity = activity;
        this.listExercices=listExercices;
        this.category=category;
    }
}
