import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {PrimeIcons, SelectItem} from 'primeng/api';
import {MenuItem} from 'primeng/api';

import {MessageService} from 'primeng/api';

import { PickListModule } from 'primeng/picklist';
import {Product} from "../../../api/product";
import {ProductService} from "../../../service/product.service";
interface City {
    name: string,
    code: string
}
@Component({
    templateUrl: './emptydemo.component.html',
    styleUrls: ['./emptydemo.component.scss'],

})
export class EmptyDemoComponent  implements OnInit {

    cities?: City[];
    countries: any[] | undefined;
    item?: string;
    items: SelectItem[];
    selectedCountry: string | undefined;
    selectedTeam = '';

    onSelected(value: string): void {
        this.selectedTeam = value;
    }


    items1: MenuItem[] = [];

    lang: any;
    public items2: MenuItem[] = [
        {
            label: 'Dashboard',

        },
        {
            label: 'Notifications',

        },
        {
            label: 'User Settings',

        },
        {
            label: 'Log Out',

        }];

    constructor() {
        this.items = [];
        for (let i = 0; i < 10; i++) {
            this.items.push({label: 'Item ' + i, value: 'Item ' + i});
        }
    }

    ngOnInit() {
        this.items1 = [
            {
                label: 'Cognitif',
                items: [{
                    label: 'Running'
                },
                    {
                        label: 'walking',
                    },
                    {
                        label: 'Talking',
                    }
                ]
            }
        ];
        this.lang = [
            {name: "HTML"},
            {name: "ReactJS"},
            {name: "Angular"},
            {name: "Bootstrap"},
            {name: "PrimeNG"},
        ];


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
