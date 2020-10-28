import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './components/modal/modal.component';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';
// import { CustomInputComponent } from './components/custom-input/custom-input.component';


@NgModule({
  declarations: [ModalComponent, CustomSelectComponent],
  imports: [
    CommonModule
  ],
  exports: [ModalComponent, CustomSelectComponent]
})
export class SharedModule { }
