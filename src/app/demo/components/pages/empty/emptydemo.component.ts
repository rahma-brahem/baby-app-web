import {Component, OnInit} from '@angular/core';
import {Recommendation} from "./model/Recommendation";
import {Category} from "./model/Category";
import {Exercice} from "./model/Exercice";
import {Segment} from "./model/Segment";
import {Gender} from "./model/Gender";
import {Portrait} from "./model/Portrait";
import {Kid} from "./model/Kid";
import {Educator} from "./model/Educator";
import {Institution} from "./model/Institution";
import {AppLoginData} from "./dto/CoreModels";
import {BabyService} from "./service/BabyService";
import {MenuItem} from "primeng/api";


//import {fileURLToPath} from "url";





@Component({
    templateUrl: './emptydemo.component.html',
    styleUrls: ['./emptydemo.component.scss'],

})
export class EmptyDemoComponent  implements OnInit {


    constructor(private service:BabyService) {
    }
    gfg:MenuItem[]=[];
    socioaffectif: Recommendation[]=[]  ;
    showDropdownSocioaffectif = false;
    selectedOptionSo: Recommendation | undefined;
    selectedOptionsSo: Recommendation[] = [];


    cognitif:Recommendation[]=[];
    showDropdownCognitif=false;
    selectedOptionC:Recommendation|undefined;
    selectedOptionsC:Recommendation[]=[];

    physique:Recommendation[]=[];
    showDropdownPhysique = false;
    selectedOptionPh:Recommendation|undefined;
    selectedOptionsPh:Recommendation[]=[];

    language:Recommendation[]=[];
    showDropdownLanguage = false;
    selectedOptionL:Recommendation|undefined;
    selectedOptionsL:Recommendation[]=[];


    sidebarVisible: boolean = false;
    listEnfant:Kid[]=[];
    selectedEnfant!:Kid;

    r:HTMLElement|null = document.querySelector(':root');
    comment: string|undefined;
    /*item?: string;
    items?: SelectItem[];*/
    date:Date=new Date("2019-01-16");
    //kid1:EnrolledKid=new EnrolledKid('1','sarra',Gender.boy, '123','parent of sarra',this.date,);
    segmant1:Segment=new Segment(1,2,Gender.boy);
    segmant2:Segment=new Segment(2,3,Gender.girl);
    exercice1:Exercice=new Exercice("dierebonjour au matin");
    exercice2=new Exercice("dire bonjour au soir");
    rec1:Recommendation=new Recommendation("dire bonjour",[this.exercice1,this.exercice2],Category.socioaffectif,this.segmant1);
    rec2:Recommendation=new Recommendation("dire bonjour",[this.exercice1],Category.cognitif,this.segmant1);
    rec3:Recommendation=new Recommendation("dire bonjour",[this.exercice1],Category.physique,this.segmant1);
    rec4:Recommendation=new Recommendation("dire bonjour",[this.exercice1],Category.language,this.segmant1);
    allRecs=[this.rec1,this.rec2,this.rec3,this.rec4];
    portrait1:Portrait=new Portrait(this.date,"rien de special",15,1,[this.rec1,this.rec2,this.rec3,this.rec4]);
    portrait2:Portrait=new Portrait(this.date,"rien de special",15,1,[this.rec1,this.rec2,this.rec3,this.rec4]);
    fille1:Kid=new Kid("id","sarra","fille",Gender.girl,this.date,[this.portrait1,this.portrait2] );
    garcon1:Kid=new Kid("id2","toto","garcon",Gender.boy, this.date,[this.portrait1]);
    educator1:Educator=new Educator("educator","Educator1","EducatorlastName",4,"email",22,[this.fille1,this.garcon1]);



    institution:Institution=new Institution( 4,[this.educator1],"institution","institution1");


    ngOnInit() {
        this.socioaffectif = this.allRecs.filter(x=>x.category==Category.socioaffectif)
            /*{ label: 'Manger tout seul',defi:"hellooooo"},
            { label: 'Marcher',defi:"hellooooo"},
            { label: 'Parler correctement',defi:"hellooooo" },
            { label: 'Jouer ' ,defi:"hellooooo"},*/

        //];
        this.cognitif=[this.rec2
            /*{label:" l' enfant peut comparer la taille de différents objets en utilisant des mots comme « plus gros » ou « plus petit ",
            defi:"hellooooo"},
            {label:"il contrôle peu ses pensées, ses paroles ou ses gestes. Par exemple, il parle par-dessus vous quand vous parlez",defi:"hellooooo"}*/
        ];
        this.physique=[this.rec3
            /*{label:'courir',defi:"hellooooo"},
            {label:'marcher',defi:"hellooooo"},*/
        ];
        this.language=[this.rec4
            /*{label:'parler correctement',defi:"hellooooo"},
            {label:'dire une phrase correcte',defi:"hellooooo"}*/];
        this.listEnfant=this.educator1.listKids;/*[ {name:'fille',
            genre:"f",
            cognitif:this.cognitif,
            socioaffectif:this.socioaffectif,
            language:this.language,
            physique:this.physique,
},
                {name:"garçon",
                    genre:"m",
                    cognitif:this.cognitif,
                    socioaffectif:this.socioaffectif,
                    language:this.language,
                    physique:this.physique
                }];*/

        this.gfg = [
            {
                label:'Courses',
                items:[
                    {
                        label:'For Freshers',
                        items:[
                            {
                                label:'DSA Self Paced',
                            },
                            {
                                label:'C++ STL',
                            },

                        ]
                    }
                ]
            },
        ];


    }



    toggleDropdownSocioaffectif() {
        this.showDropdownSocioaffectif = !this.showDropdownSocioaffectif;
    }

    toggleDropdownCognitif() {
        this.showDropdownCognitif = !this.showDropdownCognitif;
    }
    toggleDropdownPhysique() {
        this.showDropdownPhysique = !this.showDropdownPhysique;
    }
    toggleDropdownLanguage() {
        this.showDropdownLanguage = !this.showDropdownLanguage;
    }
    onOptionSelectionSo() {
        if (this.selectedOptionSo) {
            if(!this.searchOption(this.selectedOptionSo,this.selectedOptionsSo)){

            this.selectedOptionsSo.push(this.selectedOptionSo);}
            console.log(this.selectedOptionsSo);
        }
    }
    onOptionSelectionC(){
        if (this.selectedOptionC) {
            if(!this.searchOption(this.selectedOptionC,this.selectedOptionsC)){
            this.selectedOptionsC.push(this.selectedOptionC);
        }}
    }
    onOptionSelectionPh(){
        if (this.selectedOptionPh) {
            if(!this.searchOption(this.selectedOptionPh,this.selectedOptionsPh)){
            this.selectedOptionsPh.push(this.selectedOptionPh);}
        }
    }
    onOptionSelectionL(){
        if (this.selectedOptionL) {
            if(!this.searchOption(this.selectedOptionL,this.selectedOptionsL)){
            this.selectedOptionsL.push(this.selectedOptionL);}
        }
        console.log(this.selectedOptionsL);
    }
    searchOption(option:Recommendation,list:Recommendation[]):boolean{
        var test =false;
        for(let i:number=0;i<list.length;i++){
            if (list[i]===option){
                test=true;
            }
        }
        return (test);
    }
    removefromSo(option:Recommendation){
        let index=this.selectedOptionsSo.indexOf(option);
        this.selectedOptionsSo.splice(index,1);
        console.log(this.selectedOptionsSo);
    }
    removefromCo(option:Recommendation){
        let index=this.selectedOptionsC.indexOf(option);
        this.selectedOptionsC.splice(index,1);
        console.log(this.selectedOptionsC);
    }
    removefromPh(option:Recommendation){
        let index=this.selectedOptionsPh.indexOf(option);
        this.selectedOptionsPh.splice(index,1);
        console.log(this.selectedOptionsPh);
    }
    removefromLa(option:Recommendation){
        let index=this.selectedOptionsL.indexOf(option);
        this.selectedOptionsL.splice(index,1);
        console.log(this.selectedOptionsL);
    }


    makeChange(selectedEnfant:Kid){
        console.log(selectedEnfant);

        /*this.selectedOptionsSo=selectedEnfant.socioaffectif;
        this.selectedOptionsPh=selectedEnfant.physique;
        this.selectedOptionsL=selectedEnfant.language;
        this.selectedOptionsC=selectedEnfant.cognitif;*/
if(this.selectedEnfant.gender==Gender.girl){
        this.r!.style.setProperty('--gendre', 'linear-gradient(90deg, hsla(12, 89%, 89%, 1) 0%, hsla(329, 82%, 76%, 1) 50%, hsla(342, 95%, 78%, 1) 100%)');}
else{
    this.r!.style.setProperty('--gendre', 'linear-gradient(90deg, hsla(176, 61%, 87%, 1) 0%, hsla(150, 54%, 86%, 1) 50%, hsla(301, 68%, 84%, 1) 100%)');}


        console.log(this.r!.style.getPropertyValue('--gendre'));

    }


    login() {
        var data:AppLoginData={username:"admin",password:"admin"};
        this.service.login(data).subscribe(value => console.log(value));


    }
}
