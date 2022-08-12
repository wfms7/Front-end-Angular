import { AdicionarUserComponent } from './adicionar-user/adicionar-user.component';
import { UserComponent } from './user.component';

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
{
  path:'',
  component:UserComponent,
  children:[
    {
      path:"users",
      component:UsersComponent,
    },
    {
      path:"usercadastro",
      component:AdicionarUserComponent,
    },
    {
      path:"usercadastro/:userId",
      component:AdicionarUserComponent,

    }

  ]

},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule{}
