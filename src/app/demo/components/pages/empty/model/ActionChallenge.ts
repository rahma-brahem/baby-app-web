
import {CardsType} from "./CardsType";
export class ActionChallenge{
    constructor(ageMin: number, ageMax: number, action: string, challenge: string[], type: CardsType) {
        this.ageMin = ageMin;
        this.ageMax = ageMax;
        this.action = action;
        this.challenge = challenge;
        this.type = type;
    }
    ageMin:number;
    ageMax:number;
    action:string;
    challenge:string[];
    type:CardsType;

}
