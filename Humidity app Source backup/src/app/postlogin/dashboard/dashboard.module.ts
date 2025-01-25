import { NgModule } from "@angular/core";
import { MaterialModule } from "../../shared/material.module";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";





@NgModule({

    imports: [
        DashboardComponent,
        CommonModule,
        MaterialModule,
    ],

    declarations: [DashboardComponent]

})

export class DashboardModule {

}