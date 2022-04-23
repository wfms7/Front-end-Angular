import { Telefones } from './../telefones/telefones';


export interface NovoPaciente {
    id?: number;
    nome?: string;
    dataNascimento?:Date;
    cpf?:string;
    rg?:string;
    nomeMae?:string;
    nomePai?:string;
    email?:string;
    endereco?:string;
    cep?:string;
    bairro?:string;
    telefones?:Telefones;
}

export interface dadosPaciente {
  countPaciente:number;
  data?:listaPacientes;
}



export type listaPacientes = Array<NovoPaciente>


