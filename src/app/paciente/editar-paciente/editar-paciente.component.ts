import { TelefonesService } from './../../services/telefones/telefones.service';
import { Telefone } from './../../models/telefones/telefones';
import { Observable } from 'rxjs';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NovoPacienteService } from './../../services/paciente/novo-paciente.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NovoPaciente } from 'src/app/models/paciente/novo-paciente';
import * as moment from 'moment';
import { Telefones } from 'src/app/models/telefones/telefones';
import { AlertModelService } from 'src/app/componentes/alert-model/alert-model.service';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css'],
})
export class EditarPacienteComponent implements OnInit {
  paciente!: NovoPaciente;
  telefone!: Telefone;
  pacienteId!: number;
  pacienteForm!: FormGroup;
  telefonesPaciente$!: Observable<Telefones>;
  teleForm!: FormGroup;

  constructor(
    private activateRoute: ActivatedRoute,
    private pacienteService: NovoPacienteService,
    private formBuilder: FormBuilder,
    private telefoneService: TelefonesService,
    private alerteModelService: AlertModelService
  ) {}

  ngOnInit(): void {
    this.pacienteForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.maxLength(250)]],
      dataNascimento: ['0001-01-01'],
      cpf: [''],
      rg: ['', [Validators.maxLength(25)]],
      nomeMae: ['', [Validators.maxLength(250)]],
      nomePai: ['', [Validators.maxLength(250)]],
      email: ['', [Validators.email, Validators.maxLength(100)]],
      endereco: ['', [Validators.maxLength(250)]],
      cep: [''],
      bairro: ['', [Validators.maxLength(250)]],
    });
    this.teleForm = this.formBuilder.group({
      tipo: ['', [Validators.required]],
      telefones: ['', [Validators.required]],
    });

    this.pacienteId = this.activateRoute.snapshot.params['pacienteId'];
    this.pacienteService
      .getPacientePorId(this.pacienteId)
      .subscribe((paciente_) => {
        paciente_;
        this.pacienteForm.patchValue({
          nome: paciente_.nome,
          dataNascimento: moment(paciente_.dataNascimento).format('YYYY-MM-DD'),
          cpf: paciente_.cpf,
          rg: paciente_.rg,
          nomeMae: paciente_.nomeMae,
          nomePai: paciente_.nomePai,
          email: paciente_.email,
          endereco: paciente_.endereco,
          cep: paciente_.cep,
          bairro: paciente_.bairro,
        });

        this.getTelefones(this.pacienteId);
      });
  }

  getFormatterDate() {
    const today = moment();
  }

  getTelefones(id: number) {
    this.telefonesPaciente$ = this.pacienteService.getTelefonePacienteId(id);
  }

  editarPaciente() {
    if (this.pacienteForm.valid) {
      const paciente_ = this.pacienteForm.getRawValue() as NovoPaciente;

      paciente_.id = this.activateRoute.snapshot.params['pacienteId'];
      console.log(paciente_);

      this.pacienteService.atualizarPAciente(paciente_).subscribe((retorno) => {
        this.paciente = retorno;
        this.hangdleMensagemSucesso("Atualizado Paciente com Sucesso");
      });
    }
  }

  addTelefone() {
    if (this.teleForm.valid) {
      const telefone_ = this.teleForm.getRawValue() as Telefone;

      telefone_.pacienteId = this.activateRoute.snapshot.params['pacienteId'];
      const telefones_: Telefones = [telefone_];
      this.telefoneService
        .addTelefonePacinte(telefones_)
        .subscribe((retorno) => {
          retorno;
          this.hangdleMensagemSucesso("Adicionado Telefone Com Sucesso");
          this.getTelefones(this.pacienteId);
        });
      this.teleForm.reset();
    }
  }

  hangdleMensagemSucesso(mensagem:string) {
    this.alerteModelService.showAlertSuccess(mensagem);
  }
}
