
import { catchError, empty } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NovoPaciente } from '../../models/paciente/novo-paciente';
import { NovoPacienteService } from '../../services/paciente/novo-paciente.service';
import { AlertModelService } from 'src/app/componentes/alert-model/alert-model.service';

@Component({
  selector: 'app-novo-paciente',
  templateUrl: './novo-paciente.component.html',
  styleUrls: ['./novo-paciente.component.css'],
})
export class NovoPacienteComponent implements OnInit {
  novoPacienteForm!: FormGroup;
  paciente!: NovoPaciente;


  constructor(
    private formBuilder: FormBuilder,
    private novoPacienteService: NovoPacienteService,
    private router: Router,
    private alerteModelService: AlertModelService

  ) {}

  ngOnInit(): void {
    this.novoPacienteForm = this.formBuilder.group({
      nome: ['',[Validators.required,Validators.maxLength(250)]],
      dataNascimento: ['0001-01-01'],
      cpf: [''],
      rg: ['', [Validators.maxLength(25)]],
      nomeMae: ['',[Validators.maxLength(250)]],
      nomePai: ['',[Validators.maxLength(250)]],
      email: ['',[Validators.email,Validators.maxLength(100)]],
      endereco: ['',[Validators.maxLength(250)]],
      cep: [''],
      bairro: ['',[Validators.maxLength(250)]],
    });
  }

  cadastrarPaciente() {
    if(this.novoPacienteForm.valid){

      const novoPaciente = this.novoPacienteForm.getRawValue() as NovoPaciente;

    this.novoPacienteService
      .cadastraNovoPaciente(novoPaciente)

      .subscribe( retorno => {
        this.paciente = retorno; this.hangdleMensagemSucesso();this.router.navigate([`editarpaciente/${this.paciente.id}`])
       // this.paciente = JSON.stringify( data);localStorage.setItem("PacienteCriado",this.paciente);
      }) ;

    }


    //const  = JSON.stringify (this.paciente);
  }

  hangdleMensagemSucesso()
  {
      this.alerteModelService.showAlertSuccess("Salvo Com sucesso")
  }

  hangdleMensagemError(mensagem:string)
  {

  }


}
