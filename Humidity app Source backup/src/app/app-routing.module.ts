import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'',
    redirectTo:'postlogin/dashboard',
    pathMatch:'full'
  },
  {
    path:'postlogin' ,loadChildren: () => import ('./postlogin/postlogin.module').then(p => p.PostLoginModule),  
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
