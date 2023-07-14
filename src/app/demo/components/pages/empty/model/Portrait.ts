import {ActionChallenge} from "./ActionChallenge";

export class Portrait{
    date:Date;
    socioaffectif:ActionChallenge[];
    cognitif:ActionChallenge[];
    physique:ActionChallenge[];
    language:ActionChallenge[];

    constructor(date: Date, socioaffectif: ActionChallenge[], cognitif: ActionChallenge[], physique: ActionChallenge[], language: ActionChallenge[]) {
        this.date = date;
        this.socioaffectif = socioaffectif;
        this.cognitif = cognitif;
        this.physique = physique;
        this.language = language;
    }
}
