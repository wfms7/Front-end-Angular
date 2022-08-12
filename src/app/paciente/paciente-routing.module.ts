import { PacientesComponent } from './pacientes/pacientes.component';


import { PacienteComponent } from './paciente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoPacienteComponent } from './novo-paciente/novo-paciente.component';
import { EditarPacienteComponent } from './editar-paciente/editar-paciente.component';


const routes: Routes = [
  {
    path:'',
    component: PacienteComponent,
    children:[

      {
        path:"pacientes",
        component: PacientesComponent,

      },

      {
        path:"novopaciente",
        component: NovoPacienteComponent,

      },
      {
        path:"editarpaciente/:pacienteId",
        component: EditarPacienteComponent,
      }

    ],
  },

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }

