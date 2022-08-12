import { Role } from "../Role/Role"


export  interface User {


  id?:number,
  username?: string,
  email?: string,
  password?:string,
  repassword?: string,
  nome?: string,
  dataNascimento?: Date,
  cpf?:string,
  rg ?:string,
  crm ?:string,
  nomeMae ?:string,
  nomePai ?:string,
  roles :Role
}

export type listaUsers = Array<User>


export  interface novoUser {


  id?:number,
  username?: string,
  email?: string,
  password?:string,
  repassword?: string,
  nome?: string,
  datanascimento?: Date,
  cpf?:string,
  rg ?:string,
  crm ?:string,
  nomeMae ?:string,
  nomePai ?:string,
  role :string
}

export interface dadosUser
{
  data?:listaUsers,
  totalUser:number,
}
