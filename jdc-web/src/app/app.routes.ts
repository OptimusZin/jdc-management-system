import { Routes } from '@angular/router';
import { PublicHomeComponent } from './public/public-home/public-home.component';
import { PublicBodyComponent } from './public/body/public-body/public-body.component';
import { LoginComponent } from './public/head/login/login.component';
import { PublicClassesComponent } from './public/head/public-classes/public-classes.component';
import { AboutUsComponent } from './public/head/about-us/about-us.component';

export const routes: Routes = [
  {path:'public', component:PublicHomeComponent, children:[
    {path:'body', component:PublicBodyComponent},
    {path:'login', component:LoginComponent},
    {path:'classes', component:PublicClassesComponent},
    {path:'about-us', component:AboutUsComponent},
    {path:'', redirectTo:'body',pathMatch:'full'}
  ]},



  {path: '', redirectTo:'/public', pathMatch: 'full'}



];
