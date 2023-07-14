import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyDemoRoutingModule } from './emptydemo-routing.module';
import { EmptyDemoComponent } from './emptydemo.component';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {SharedModule} from "primeng/api";
import {TimelineModule} from "primeng/timeline";
import {InputTextareaModule} from "primeng/inputtextarea";
import {DropdownModule} from "primeng/dropdown";
import { MenuModule } from 'primeng/menu';
//import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule }
   // from '@angular/platform-browser/animations';

import { ImageModule } from 'primeng/image';
import {AccordionModule} from "primeng/accordion";
import {FormsModule} from "@angular/forms";
import {PickListModule} from "primeng/picklist";
import {ChipModule} from "primeng/chip";
import {SidebarModule} from "primeng/sidebar";
import {TabMenuModule} from "primeng/tabmenu";
import {TabViewModule} from "primeng/tabview";
import {ListboxModule} from "primeng/listbox";
import {ScrollPanelModule} from "primeng/scrollpanel";


@NgModule({
    imports: [
        CommonModule,
        EmptyDemoRoutingModule,
        ButtonModule,
        CardModule,
        SharedModule,
        TimelineModule,
        InputTextareaModule,
        MenuModule,
        //BrowserModule,
        //BrowserAnimationsModule,
        ImageModule,
        DropdownModule,
        AccordionModule,
        FormsModule,
        PickListModule,
        ChipModule,
        SidebarModule,
        TabMenuModule,
        TabViewModule,
        ListboxModule,
        ScrollPanelModule
    ],
    declarations: [EmptyDemoComponent]
})
export class EmptyDemoModule { }
