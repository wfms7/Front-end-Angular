

import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'home',
    loadChildren:() => import("./home/home-routing.module").then((m)=>m.HomeRoutingModule),
  },
  {
    path:'paciente',
    loadChildren:() => import("./paciente/paciente-routing.module").then((m)=>m.PacienteRoutingModule),
  },
  {
    path:'user',
    loadChildren:() => import("./user/user-routing.module").then((m)=>m.UserRoutingModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
