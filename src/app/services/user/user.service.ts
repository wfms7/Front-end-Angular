import { dadosUser } from './../../models/user/user';
import { Observable, skip } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { User, listaUsers, novoUser } from 'src/app/models/user/user';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient)
  {

   }


   getUser(skip:number):Observable<dadosUser>
   {
      return this.http.get<dadosUser>(`${API}/usuario?skip=${skip}`)
   }

   cadastraUser(novoUser:novoUser)
   {

     return this.http.post(`${API}/usuario`,novoUser);

   }

   getUserporId(userId:number):Observable<User>
   {

    return this.http.get<User>(`${API}/Usuario/${userId}`);

   }

   getUserPorTipo(tipo:string, dado:string,skip:number):Observable<dadosUser>
   {
    return this.http.get<dadosUser>(`${API}/usuario?skip=${skip}&${tipo}=${dado}`)
   }

   atualizarUser(dadosUser:novoUser)
   {
    return this.http.put(`${API}/usuario/${dadosUser.id}`,dadosUser);
   }

   deletarUser(idUser:number)
   {
      return this.http.delete(`${API}/usuario/${idUser}`);

   }



}
