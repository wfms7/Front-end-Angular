import { dadosPaciente } from './../../models/paciente/novo-paciente';

import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { catchError, empty, Observable, of, skip, switchMap, tap } from 'rxjs';
import {
  listaPacientes,
  NovoPaciente,
} from '../../models/paciente/novo-paciente';
import { NovoPacienteService } from '../../services/paciente/novo-paciente.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModelComponent } from 'src/app/componentes/alert-model/alert-model.component';
import { AlertModelService } from 'src/app/componentes/alert-model/alert-model.service';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css'],
})
export class PacientesComponent implements OnInit {
  listaPacientes$!: Observable<dadosPaciente>;
  onePaciente!: NovoPaciente;

  itenPorPagina: number = 10;
  maxSize = 5;

  totalItems = 0;
  currentPage = 1;
  page?: number;

  public form!: FormGroup;

  constructor(
    private pacientesService: NovoPacienteService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alerteModelServe: AlertModelService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [''],
    });
    this.getPaciente(this.currentPage);
  }

  BuscarPorNome(skip: number) {
    const nome = this.form.controls['nome'].value;

    if (skip == 0) {
      this.listaPacientes$ = this.pacientesService.getPacientePorNome(nome);
    } else {
      this.listaPacientes$ = this.pacientesService.getPacientePorNomeSkip(
        nome,
        this.skip_(skip)
      );
    }
    this.countPaciente();

    //   this.listaPacientes$.subscribe((m) => {(this.totalItems = m.countPaciente);
    //   this.page = this.totalItems;
    //});
  }

  getPaciente(skip: number) {
    if (skip == 0) {
      this.listaPacientes$ = this.pacientesService.getPacientes();
    } else {
      this.listaPacientes$ = this.pacientesService
        .getPacienteSkip(this.skip_(skip))
        .pipe(
          catchError(error => {
            console.error(error);
            this.hangdleMensagemError();
            return of();
          })
        );
    }

    this.countPaciente();
  }

  getPacienteId(id?: number) {
    const id_ = id ?? 0;

    this.pacientesService.getPacientePorId(id_).subscribe((dados) => {
      this.onePaciente = dados;
    });
  }

  skip_(skip: number): number {
    //this.pag = skip;

    skip = skip - 1;
    skip = skip * this.itenPorPagina;

    return skip;
  }

  pageChanged(event: PageChangedEvent): void {
    const nome = this.form.controls['nome'].value;
    if (nome) {
      this.BuscarPorNome(event.page);
    } else {
      this.getPaciente(event.page);
    }
  }

  Deletar(id?:number)
  {
    if(id == undefined)
    {
      id=0
    }
   console.log((id))

   this.pacientesService.deletarPaciente(id).subscribe((m)=>{ this.getPaciente(this.currentPage)});




  }

  countPaciente() {
    this.listaPacientes$.subscribe((m) => {
      this.totalItems = m.countPaciente;
      this.page = this.totalItems;
    });
  }

  hangdleMensagemError() {
    this.alerteModelServe.showAlertDanger('Erro para carregar Pacientes');
  }
}
