import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModelComponent } from './alert-model.component';



@NgModule({
  declarations: [
    AlertModelComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[AlertModelComponent],
  entryComponents:[AlertModelComponent]
})
export class SharedModule { }
