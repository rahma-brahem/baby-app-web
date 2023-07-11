import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {PrimeIcons, SelectItem} from 'primeng/api';
import {MenuItem} from 'primeng/api';

import {MessageService} from 'primeng/api';

import { PickListModule } from 'primeng/picklist';
import {Product} from "../../../api/product";
import {ProductService} from "../../../service/product.service";

interface Options{
    label:string,
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
    selectedOptionsL:any=new Set();


    sidebarVisible: boolean = false;



    item?: string;
    items?: SelectItem[];

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
    onCitySelectionSo() {
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
            this.selectedOptionsL.add(this.selectedOptionL);
        }
        console.log(this.selectedOptionsL);
    }


    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
   myFunction() {

        document.getElementById("myDropdown")!.classList.toggle("show");

    }

    filterFunction() {
        var input, filter, txtValue, div, a, i,p,option,button;
        input = document.getElementById("myInput");
        // @ts-ignore
        filter = input!.value.toUpperCase();
        div = document.getElementById("myDropdown");
        a = div!.getElementsByTagName("option");
        for (i = 0; i < a.length; i++) {
            txtValue = a[i].textContent || a[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
            } else {
                a[i].style.display = "none";
            }
        }





}
}
