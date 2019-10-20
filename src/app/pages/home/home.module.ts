import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { ModalFormComponent } from './components/modal-form/modal-form.component';

@NgModule({
  declarations: [
    HomeComponent,
    // ModalFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    // ModalFormComponent
  ],
  entryComponents: [
    // ModalFormComponent
  ]
})
export class HomeModule { }
