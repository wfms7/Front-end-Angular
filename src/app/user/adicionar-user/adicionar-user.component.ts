import { AlertType } from './../../componentes/alert-model/alert-model.service';
import { UserService } from './../../services/user/user.service';

import { novoUser, User } from 'src/app/models/user/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertModelService } from 'src/app/componentes/alert-model/alert-model.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { catchError, map, of, pipe, throwError } from 'rxjs';
import {
  HttpErrorResponse,
  HttpHeaderResponse,
  HttpResponse,
} from '@angular/common/http';

@Component({
  selector: 'app-adicionar-user',
  templateUrl: './adicionar-user.component.html',
  styleUrls: ['./adicionar-user.component.css'],
})
export class AdicionarUserComponent implements OnInit {
  dadosUser!: novoUser;
  novoFormUser!: FormGroup;
  btnSalvarEditar = 'Cadastrar';
  userId: number = 0;
  statusSenha: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private alerteModelService: AlertModelService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.novoFormUser = this.formBuilder.group({
      nome: [''],
      datanascimento: [''],
      cpf: [''],
      rg: [''],
      crm: [''],
      nomeMae: [''],
      nomePai: [''],
      email: [''],
      username: [''],
      password: [''],
      repassword: [''],
      role: [''],
    });

    this.userId = this.activateRoute.snapshot.params['userId'];

    if (this.userId > 0) {
      this.btnSalvarEditar = 'Atualizar';
      this.statusSenha = false;
      this.getUserporid(this.userId).subscribe((user) => {
        console.log(user);

        this.novoFormUser.patchValue({
          nome: user.nome,
          datanascimento: moment(user.dataNascimento).format('YYYY-MM-DD'),
          cpf: user.cpf,
          rg: user.rg,
          crm: user.crm,
          nomeMae: user.nomeMae,
          nomePai: user.nomePai,
          email: user.email,
          username: user.username,

          role: user.roles.name,
        });
      });
    }
  }

  getFormatterDate() {
    const today = moment();
  }

  cadastrarAtualizarUser() {
    var user_ = this.novoFormUser.getRawValue() as novoUser;

    if (this.userId > 0) {
      user_.id = this.userId;
      this.userService
        .atualizarUser(user_)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            if (error instanceof HttpErrorResponse) {
              this.hangdleMensagemError(error.error.result.reasons[0].message
                );
                debugger;
              return throwError(error);
            } else {
              this.hangdleMensagemError(error);
              return throwError(error);
            }
          })
        )
        .subscribe((m) => {
          this.hangdleMensagemSucesso('Atualizado com sucesso');
        });

    } else {
      if (user_.password == user_.repassword) {
        this.userService.cadastraUser(user_)
        .pipe(
          catchError((error: HttpErrorResponse) => {
            if (error instanceof HttpErrorResponse) {
              this.hangdleMensagemError(error.error.result.reasons[0].message
                );
                debugger;
              return throwError(error);
            } else {
              this.hangdleMensagemError(error);
              return throwError(error);
            }
          })
        )

        .subscribe((m) => {
          this.hangdleMensagemSucesso('Salvo Com sucesso');
          this.router.navigate([`user/users`]);
        });
      }
    }
  }

  getUserporid(userId: number) {
    return this.userService.getUserporId(userId);
  }

  hangdleMensagemSucesso(mensagem: string) {
    this.alerteModelService.showAlertSuccess(mensagem);
  }

  hangdleMensagemError(mensagem: string) {
    this.alerteModelService.showAlertDanger(mensagem);
  }

  // hangdleError(err)
  //{
  // if(err instanceof HttpErrorResponse)
  //{}
  //else{}

  //  return throwError(err);

  //}
}
