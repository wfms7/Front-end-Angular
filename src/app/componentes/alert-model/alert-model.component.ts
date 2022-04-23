import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-model',
  templateUrl: './alert-model.component.html',
  styleUrls: ['./alert-model.component.css']
})
export class AlertModelComponent implements OnInit {

  @Input() message?: string;
  @Input() type ='success';
  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  onClose()
  {
    this.bsModalRef.hide()
  }

}
