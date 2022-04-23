import { PacienteModule } from './paciente/paciente.module';
import { NovoPacienteComponent } from './paciente/novo-paciente/novo-paciente.component';
import { RouterModule } from '@angular/router';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxMaskModule } from 'ngx-mask';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CabecalhoModule,
    PacienteModule,
    NgxMaskModule.forRoot({dropSpecialCharacters:false}),
    NgxPaginationModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot(),





  ],
  exports:[ModalModule,PaginationModule],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
