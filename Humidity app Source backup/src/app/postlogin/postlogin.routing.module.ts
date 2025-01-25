import { NgModule } from "@angular/core";
import { Routes , RouterModule } from '@angular/router';
import { PostLoginComponent } from "./postlogin.component";



const routes :Routes =[
 
    {
        path:'',
        component:PostLoginComponent,
        children:[ 
            {
                path:'dashboard' , loadChildren:() => import ('./dashboard/dashboard.module').then (d => d.DashboardModule) ,
            } ,
            {
                path:'settings' , loadChildren:() => import ('./settings/settings.module').then (s => s.SettingsModule),
            } ,
            {
                path:'report' , loadChildren:() => import ('./report/report.module').then (r => r.ReportModule),
            }
        ]
    }

];




@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]

})

export class PostLoginRoutingModule {

}