import { NgModule } from "@angular/core";
import { MaterialModule } from "../shared/material.module";
import { CommonModule } from "@angular/common";
import { PostLoginComponent } from "./postlogin.component";
// import { SettingsModule } from "./settings/settings.module";
// import { ReportModule } from "./report/report.module";
// import { DashboardModule } from "./dashboard/dashboard.module";


// import { SettingsModule } from "./settings/settings.module";
// import { SetttingsRoutingModule } from "./settings/settings.routing.module";
// import { ReportModule } from "./report/report.module";
// import { ReportRoutingModule } from "./report/report.routing.module";
// import { DashboardModule } from "./dashboard/dashboard.module";
// import { DashboardRoutingModule } from "./dashboard/dashboard.routing.module";



@NgModule({
  
    imports:[
        MaterialModule,
        CommonModule,
        // SettingsModule,
        // ReportModule,
        // DashboardModule

        // SetttingsRoutingModule,
    
        // ReportRoutingModule,
       
        // DashboardRoutingModule
    ],

    declarations:[]

})

export class PostLoginModule{

}