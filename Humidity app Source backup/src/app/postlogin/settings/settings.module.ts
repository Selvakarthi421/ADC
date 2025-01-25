import { NgModule } from "@angular/core";
import { MaterialModule } from "../../shared/material.module";
import { CommonModule } from "@angular/common";

import { SettingsComponent } from "./settings.component";
import { SetttingsRoutingModule } from "./settings.routing.module";




@NgModule({
  
    imports:[
        MaterialModule,
        SettingsComponent,
        CommonModule,
        SetttingsRoutingModule
    ],

    declarations:[SettingsComponent]

})

export class SettingsModule{

}