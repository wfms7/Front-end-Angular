import { Observable } from 'rxjs';
import {  Telefone, Telefones } from './../../models/telefones/telefones';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TelefonesService {

  constructor(private http: HttpClient) { }

  addTelefonePacinte(telefone:Telefones){

    console.log(telefone)
    return this.http.post(`${API}/telefone`,telefone);

  }

  getTelefoneId(id:number):Observable<Telefone>
  {
    return this.http.get<Telefone>(`${API}/telefone/tel/${id}`);
  }

   updateTelefone(telefone:Telefone){

      return this.http.put(`${API}/telefone/${telefone.id}`,telefone);

   }

}
