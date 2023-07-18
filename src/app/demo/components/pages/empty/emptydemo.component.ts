import {Component, OnInit} from '@angular/core';


//import {fileURLToPath} from "url";



interface Options{
    label:string,
    defi:string,
}
interface Enfant{
    name:string,
    genre:string,
    cognitif:Options[],
    socioaffectif:Options[],
    language:Options[],
    physique:Options[],

}

@Component({
    templateUrl: './emptydemo.component.html',
    styleUrls: ['./emptydemo.component.scss'],

})
export class EmptyDemoComponent  implements OnInit {
    socioaffectif: Options[]=[]  ;
    showDropdownSocioaffectif = false;
    selectedOptionSo: Options | undefined;
    selectedOptionsSo: Options[] = [];


    cognitif:Options[]=[];
    showDropdownCognitif=false;
    selectedOptionC:Options|undefined;
    selectedOptionsC:any[]=[];

    physique:Options[]=[];
    showDropdownPhysique = false;
    selectedOptionPh:Options|undefined;
    selectedOptionsPh:any[]=[];

    language:Options[]=[];
    showDropdownLanguage = false;
    selectedOptionL:Options|undefined;
    selectedOptionsL:any[]=[];


    sidebarVisible: boolean = false;
    listEnfant:Enfant[]=[];
    selectedEnfant!:Enfant;

    r:HTMLElement|null = document.querySelector(':root');
    comment: string|undefined;
    /*item?: string;
    items?: SelectItem[];*/
    date:Date=new Date("2019-01-16");
    //kid1:EnrolledKid=new EnrolledKid('1','sarra',Gender.boy, '123','parent of sarra',this.date,);

    ngOnInit() {
        this.socioaffectif = [
            { label: 'Manger tout seul',defi:"hellooooo"},
            { label: 'Marcher',defi:"hellooooo"},
            { label: 'Parler correctement',defi:"hellooooo" },
            { label: 'Jouer ' ,defi:"hellooooo"},

        ];
        this.cognitif=[{label:" l' enfant peut comparer la taille de différents objets en utilisant des mots comme « plus gros » ou « plus petit ",defi:"hellooooo"},
            {label:"il contrôle peu ses pensées, ses paroles ou ses gestes. Par exemple, il parle par-dessus vous quand vous parlez",defi:"hellooooo"}];
        this.physique=[
            {label:'courir',defi:"hellooooo"},
            {label:'marcher',defi:"hellooooo"},
        ];
        this.language=[{label:'parler correctement',defi:"hellooooo"},
            {label:'dire une phrase correcte',defi:"hellooooo"}];
        this.listEnfant=[{name:'fille',
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
                }];




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
    searchOption(option:Options,list:Options[]):boolean{
        var test =false;
        for(let i:number=0;i<list.length;i++){
            if (list[i]===option){
                test=true;
            }
        }
        return (test);
    }
    removefromSo(option:Options){
        let index=this.selectedOptionsSo.indexOf(option);
        this.selectedOptionsSo.splice(index,1);
        console.log(this.selectedOptionsSo);
    }
    removefromCo(option:Options){
        let index=this.selectedOptionsC.indexOf(option);
        this.selectedOptionsC.splice(index,1);
        console.log(this.selectedOptionsC);
    }
    removefromPh(option:Options){
        let index=this.selectedOptionsPh.indexOf(option);
        this.selectedOptionsPh.splice(index,1);
        console.log(this.selectedOptionsPh);
    }
    removefromLa(option:Options){
        let index=this.selectedOptionsL.indexOf(option);
        this.selectedOptionsL.splice(index,1);
        console.log(this.selectedOptionsL);
    }


    makechange(selectedEnfant:Enfant){
        console.log(selectedEnfant);
        this.selectedOptionsSo=selectedEnfant.socioaffectif;
        this.selectedOptionsPh=selectedEnfant.physique;
        this.selectedOptionsL=selectedEnfant.language;
        this.selectedOptionsC=selectedEnfant.cognitif;
if(this.selectedEnfant.genre=='f'){
        this.r!.style.setProperty('--gendre', 'linear-gradient(90deg, hsla(12, 89%, 89%, 1) 0%, hsla(329, 82%, 76%, 1) 50%, hsla(342, 95%, 78%, 1) 100%)');}
else{
    this.r!.style.setProperty('--gendre', 'linear-gradient(90deg, hsla(176, 61%, 87%, 1) 0%, hsla(150, 54%, 86%, 1) 50%, hsla(301, 68%, 84%, 1) 100%)');}


        console.log(this.r!.style.getPropertyValue('--gendre'));

    }

    //protected readonly fileURLToPath = fileURLToPath;

}
