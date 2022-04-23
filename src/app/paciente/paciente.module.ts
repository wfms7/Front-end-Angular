import { MensagemModule } from './../componentes/mensagem/mensagem/mensagem.module';
import { MensagemComponent } from './../componentes/mensagem/mensagem/mensagem.component';
import { RouterModule } from '@angular/router'
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PacienteRoutingModule } from "./paciente-routing.module";
import { PacienteComponent } from "./paciente.component";
import { NovoPacienteComponent } from './novo-paciente/novo-paciente.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { EditarPacienteComponent } from './editar-paciente/editar-paciente.component';



@NgModule({
  declarations: [
    PacienteComponent,
    NovoPacienteComponent,
    PacientesComponent,
    EditarPacienteComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    PacienteRoutingModule,
    NgxMaskModule.forChild(),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    PaginationModule.forRoot(),
    MensagemModule




  ],
  exports:[
    PacienteComponent,
    NovoPacienteComponent
  ]

})
export class PacienteModule { }
