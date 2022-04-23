import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModelComponent } from './alert-model.component';


export enum AlertType{
  DANGER = 'danger',
  SUCCESS = 'success'
}


@Injectable({
  providedIn: 'root'
})
export class AlertModelService {

  constructor(private modalService: BsModalService) { }

  private showAlert(mensagem:string, type:AlertType){

    const modalRef:BsModalRef = this.modalService.show(AlertModelComponent);
    modalRef.content.type = type;
    modalRef.content.message = mensagem;

  }


  showAlertDanger(mensagem:string){

    this.showAlert(mensagem, AlertType.DANGER)
  }

  showAlertSuccess(mensagem:string){

    this.showAlert(mensagem, AlertType.SUCCESS)
  }






}


