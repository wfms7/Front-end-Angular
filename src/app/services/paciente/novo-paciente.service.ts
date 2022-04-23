import { dadosPaciente } from './../../models/paciente/novo-paciente';
import { Telefones } from './../../models/telefones/telefones';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { listaPacientes,    NovoPaciente } from '../../models/paciente/novo-paciente';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class NovoPacienteService {

    private listaPacientes_: listaPacientes ;

  constructor(private http: HttpClient) {
    this.listaPacientes_ = [];
   }


  cadastraNovoPaciente(novoPaciente:NovoPaciente)
  {
    return this.http.post( `${API}/paciente`,novoPaciente);
  }

  getPacientes():Observable<dadosPaciente>
  {
    return  this.http.get<dadosPaciente>(`${API}/paciente`);
  }

  getPacienteSkip(skip:number):Observable<dadosPaciente>
  {
    return  this.http.get<dadosPaciente>(`${API}/paciente?skip=${skip}`);
  }

  getPacientePorNome(nome:string):Observable<dadosPaciente>
  {

    return this.http.get<dadosPaciente>(`${API}/paciente?nome=${nome}`);

  }

  getPacientePorNomeSkip(nome:string, skip:number):Observable<dadosPaciente>
  {

    return this.http.get<dadosPaciente>(`${API}/paciente?nome=${nome}&skip=${skip}`);

  }


  getPacientePorId(id:number):Observable<NovoPaciente>{

    return this.http.get<NovoPaciente>(`${API}/paciente/${id}`) ;
  }


  getTelefonePacienteId(id:number):Observable<Telefones>{

    return this.http.get<Telefones>(`${API}/telefone?id=${id}`)

  }

  deletarPaciente(id:number):Observable<NovoPaciente>{
    return this.http.delete(`${API}/paciente/${id}`)
  }

  atualizarPAciente(novoPaciente:NovoPaciente)
  {

    return this.http.put(`${API}/paciente/${novoPaciente.id}`, novoPaciente )
  }




}
