import { User } from 'src/app/models/user/user';
import { dadosUser } from './../../models/user/user';

import { Observable, skip } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  itenPorPagina: number = 10;
  page?: number;
  maxSize = 5;

  totalItems = 0;
  currentPage = 1;
  listaUsers$!: Observable<dadosUser>;
  oneUser$!: User;

  public form!: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: [''],
      tipoPesquisa: ['user'],
    });
    this.getUser(this.currentPage);
  }

  getUser(skip: number) {

    this.listaUsers$ = this.userService.getUser(this.skip_(skip));
    this.countPaciente();
  }
  getUserPortipo(skip: number) {
    var dados = this.form.getRawValue();

    if (dados.tipoPesquisa == 'user') {
      this.listaUsers$ = this.userService.getUserPorTipo(
        'userName',
        dados.nome,
        skip == 0 ? 0 : this.skip_(skip)
      );
    } else dados.tipoPesquisa == 'nomePesquisa';
    {
      this.listaUsers$ = this.userService.getUserPorTipo(
        'nome',
        dados.nome,
        skip == 0 ? 0 : this.skip_(skip)
      );
    }
    this.countPaciente();
  }

  skip_(skip: number): number {
    //this.pag = skip;

    skip = skip - 1;
    skip = skip * this.itenPorPagina;

    return skip;
  }

  getUserporId(idUser?: number) {
    const id_ = idUser ?? 0;
    this.userService.getUserporId(id_).subscribe((us) => {
      this.oneUser$ = us;
    });
  }

  pageChanged(event: PageChangedEvent): void {
    const nome = this.form.controls['nome'].value;
    if (nome) {
      this.getUserPortipo(event.page);
    } else {
      this.getUser(event.page);
    }
  }

  countPaciente() {
    this.listaUsers$.subscribe((m) => {
      this.totalItems = m.totalUser;
      this.page = this.totalItems;
    });


  }

  deletarUser(idUser?:number)
  {
    if(idUser == undefined)
    {
      idUser= 0;
    }

    this.userService.deletarUser(idUser).subscribe((m)=>{this.getUser(this.currentPage)});


  }
}
