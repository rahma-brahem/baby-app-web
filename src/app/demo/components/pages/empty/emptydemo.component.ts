import { Component, OnInit} from '@angular/core';

import {MenuItem} from 'primeng/api';



interface Options{
    label:string,
}
interface Enfant{
    name:string,
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
    selectedOptionsSo: any[] = [];


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
    selectedkid:Enfant|undefined;

    /*item?: string;
    items?: SelectItem[];*/
    items: MenuItem[] =[];

    activeItem!: MenuItem ;
    ngOnInit() {
        this.socioaffectif = [
            { label: 'Manger tout seul'},
            { label: 'Marcher'},
            { label: 'Parler correctement' },
            { label: 'Jouer ' },

        ];
        this.cognitif=[{label:" l' enfant peut comparer la taille de différents objets en utilisant des mots comme « plus gros » ou « plus petit "},
            {label:"il contrôle peu ses pensées, ses paroles ou ses gestes. Par exemple, il parle par-dessus vous quand vous parlez"}];
        this.physique=[
            {label:'courir'},
            {label:'marcher'},
        ];
        this.language=[{label:'parler correctement'},
            {label:'dire une phrase correcte'}];
        this.listEnfant=[{name:'enfant1',
    cognitif:this.cognitif,
    socioaffectif:this.socioaffectif,
    language:this.language,
    physique:this.physique,
},
                {name:"enfant2",
                    cognitif:this.cognitif,
                    socioaffectif:this.socioaffectif,
                    language:this.language,
                    physique:this.physique
                }];
        this.items = [
            { label: 'Options', icon: 'pi pi-fw pi-home' },
            { label: 'Défis', icon: 'pi pi-fw pi-calendar' },

        ];

        this.activeItem = this.items[0];

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

            this.selectedOptionsSo.push(this.selectedOptionSo);
            console.log(this.selectedOptionsSo);
        }
    }
    onOptionSelectionC(){
        if (this.selectedOptionC) {
            this.selectedOptionsC.push(this.selectedOptionC);
        }
    }
    onOptionSelectionPh(){
        if (this.selectedOptionPh) {
            this.selectedOptionsPh.push(this.selectedOptionPh);
        }
    }
    onOptionSelectionL(){
        if (this.selectedOptionL) {
            this.selectedOptionsL.push(this.selectedOptionL);
        }
        console.log(this.selectedOptionsL);
    }
}
