import { NgModule } from "@angular/core";
import { MaterialModule } from "../../shared/material.module";
import { CommonModule } from "@angular/common";

import { ReportComponent } from "./report.component";
import { ReportRoutingModule} from "./report.routing.module";
import { PostLoginComponent } from "../postlogin.component";



@NgModule({

    imports: [
        MaterialModule,
        ReportComponent,
        CommonModule,
        ReportRoutingModule
    ],

    declarations: [ReportComponent]

})

export class ReportModule {

}